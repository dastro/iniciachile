import { site } from '@/app/data/site'

export default function sitemap() {
  const routes = ['', '/servicios', '/regularizacion', '/nosotros', '/contacto']

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8
  }))
}
