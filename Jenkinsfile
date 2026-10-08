pipeline {
    agent {
        kubernetes {
            cloud 'k8-mobysuite'
            inheritFrom 'podman-builder'
            defaultContainer 'runner'
            retries 2
        }
    }

    options {
        ansiColor('xterm')
        timestamps()
        skipDefaultCheckout(true)
        retry(count: 2, conditions: [kubernetesAgent(handleNonKubernetes: true), nonresumable()])
        disableConcurrentBuilds()
        timeout(time: 45, unit: 'MINUTES')
    }

    triggers {
        githubPush()
    }

    environment {
        DOCKER_BUILDKIT = '0'
        P_REPO_URL = 'https://github.com/apptec-cl/iniciachile.git'
        P_REPO_CREDENTIALS = '32045b55-4250-4757-9ab1-efff1b297fb4'
        P_REPO_BRANCH = 'main'

        PIPELINE_NAME = 'iniciachile'
        ECR_REPOSITORY = 'apptec'
        P_ECR_URL = '280458570481.dkr.ecr.us-east-1.amazonaws.com'
        P_IMAGE_SUFFIX = 'prod'
        AWS_REGION = 'us-east-1'

        DEPLOY_NAMESPACE = 'apptec'
        DEPLOY_NAME = 'iniciachile'
    }

    stages {
        stage('Prepare tools') {
            steps {
                sh '''
                    set -eu
                    apk add --no-cache git aws-cli curl

                    curl -fsSL -o /usr/local/bin/kubectl \
                      "https://dl.k8s.io/release/v1.33.0/bin/linux/amd64/kubectl"
                    chmod +x /usr/local/bin/kubectl

                    docker version
                    aws --version
                    kubectl version --client=true
                '''
            }
        }

        stage('Checkout') {
            steps {
                deleteDir()
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "*/${P_REPO_BRANCH}"]],
                    userRemoteConfigs: [[
                        credentialsId: "${P_REPO_CREDENTIALS}",
                        url: "${P_REPO_URL}"
                    ]]
                ])
            }
        }

        stage('Resolve image version from ECR') {
            steps {
                withAWS(credentials: 'AWS-Mobysuite', region: "${AWS_REGION}") {
                    script {
                        env.VERSION = sh(
                            script: '''
                                set -eu
                                ALL_TAGS="$(aws ecr describe-images \
                                  --repository-name "${ECR_REPOSITORY}" \
                                  --region "${AWS_REGION}" \
                                  --query 'imageDetails[].imageTags[]' \
                                  --output text)"

                                LATEST_VERSION="$(
                                    printf '%s\\n' "${ALL_TAGS}" \
                                      | tr '\\t' '\\n' \
                                      | awk -v prefix="${PIPELINE_NAME}-" -v suffix="-${P_IMAGE_SUFFIX}" '
                                            index($0, prefix) == 1 &&
                                            substr($0, length($0) - length(suffix) + 1) == suffix {
                                                version = substr($0, length(prefix) + 1,
                                                    length($0) - length(prefix) - length(suffix))
                                                if (version ~ /^[0-9]+\\.[0-9]+\\.[0-9]+$/) print version
                                            }
                                        ' \
                                      | sort -t. -k1,1n -k2,2n -k3,3n \
                                      | tail -n 1
                                )"

                                if [ -z "${LATEST_VERSION}" ]; then
                                    echo "0.0.1"
                                else
                                    printf '%s\\n' "${LATEST_VERSION}" \
                                      | awk -F. '{ printf "%d.%d.%d\\n", $1, $2, $3 + 1 }'
                                fi
                            ''',
                            returnStdout: true
                        ).trim()

                        env.IMAGE_TAG = "${env.PIPELINE_NAME}-${env.VERSION}-${env.P_IMAGE_SUFFIX}"
                        env.IMAGE_URI = "${env.P_ECR_URL}/${env.ECR_REPOSITORY}:${env.IMAGE_TAG}"
                        env.IMAGE_LATEST = "${env.P_ECR_URL}/${env.ECR_REPOSITORY}:${env.PIPELINE_NAME}-latest-${env.P_IMAGE_SUFFIX}"
                        echo "Imagen a publicar: ${env.IMAGE_URI}"
                    }
                }
            }
        }

        stage('Build image') {
            steps {
                sh '''
                    set -eu
                    docker build --pull --platform linux/amd64 \
                      -f docker/production/Dockerfile \
                      -t "${IMAGE_URI}" .

                    IMAGE_ARCH="$(docker image inspect "${IMAGE_URI}" --format '{{.Architecture}}')"
                    if [ "${IMAGE_ARCH}" != "amd64" ]; then
                        echo "La imagen fue construida para ${IMAGE_ARCH}; EKS requiere amd64." >&2
                        exit 1
                    fi
                '''
            }
        }

        stage('Login ECR') {
            steps {
                withAWS(credentials: 'AWS-Mobysuite', region: "${AWS_REGION}") {
                    sh '''
                        set -eu
                        aws ecr get-login-password --region "${AWS_REGION}" \
                          | docker login --username AWS --password-stdin "${P_ECR_URL}"
                    '''
                }
            }
        }

        stage('Push ECR') {
            steps {
                withAWS(credentials: 'AWS-Mobysuite', region: "${AWS_REGION}") {
                    sh '''
                        set -eu
                        docker tag "${IMAGE_URI}" "${IMAGE_LATEST}"
                        docker push "${IMAGE_URI}"
                        docker push "${IMAGE_LATEST}"
                    '''
                    script {
                        env.IMAGE_DIGEST = sh(
                            script: '''
                                set -eu
                                aws ecr describe-images \
                                  --repository-name "${ECR_REPOSITORY}" \
                                  --region "${AWS_REGION}" \
                                  --image-ids imageTag="${IMAGE_TAG}" \
                                  --query 'imageDetails[0].imageDigest' \
                                  --output text
                            ''',
                            returnStdout: true
                        ).trim()
                        if (!(env.IMAGE_DIGEST ==~ /sha256:[0-9a-f]{64}/)) {
                            error('ECR no devolvió un digest válido para la imagen publicada.')
                        }
                        echo "Digest verificado en ECR: ${env.IMAGE_DIGEST}"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    set -eu
                    sed "s|image: iniciachile:bootstrap|image: ${IMAGE_URI}|" \
                      k8s/deployment.yaml > deployment-rendered.yaml
                    kubectl apply -f deployment-rendered.yaml -f k8s/service.yaml
                    kubectl rollout status "deployment/${DEPLOY_NAME}" \
                      -n "${DEPLOY_NAMESPACE}" --timeout=10m
                '''
            }
        }
    }

    post {
        always {
            sh '''
                if [ -n "${IMAGE_URI:-}" ]; then
                    docker image rm "${IMAGE_URI}" || true
                fi
                if [ -n "${IMAGE_LATEST:-}" ]; then
                    docker image rm "${IMAGE_LATEST}" || true
                fi
            '''
            cleanWs(
                cleanWhenNotBuilt: false,
                deleteDirs: true,
                disableDeferredWipeout: true,
                notFailBuild: true
            )
        }
    }
}
