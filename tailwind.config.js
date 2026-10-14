/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx,mdx}', './src/components/**/*.{js,jsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px'
    },
    extend: {
      colors: {
        /* Azul institucional Inicia Chile */
        brand: 'rgb(var(--brand-rgb) / <alpha-value>)',
        brandDark: 'rgb(var(--brand-dark-rgb) / <alpha-value>)',
        brandDeep: 'rgb(var(--brand-deep-rgb) / <alpha-value>)',
        brand50: 'rgb(var(--brand-50-rgb) / <alpha-value>)',
        brand100: 'rgb(var(--brand-100-rgb) / <alpha-value>)',
        brand200: 'rgb(var(--brand-200-rgb) / <alpha-value>)',
        /* Terracota: acento de interfaz (el naranja propio del logo vive sólo dentro del logo) */
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        accentDark: 'rgb(var(--accent-dark-rgb) / <alpha-value>)',
        accentLight: 'rgb(var(--accent-light-rgb) / <alpha-value>)',
        accent50: 'rgb(var(--accent-50-rgb) / <alpha-value>)',
        /* Apoyos cálidos y fríos */
        steel: 'rgb(var(--steel-rgb) / <alpha-value>)',
        sand: 'rgb(var(--sand-rgb) / <alpha-value>)',
        cream: 'rgb(var(--cream-rgb) / <alpha-value>)',
        /* Texto */
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', '-apple-system', 'sans-serif'],
        /* Sólo el logotipo conserva su tipografía original */
        logo: ['var(--font-logo)', 'system-ui', '-apple-system', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out both',
        fadeSoft: 'fadeIn 0.9s ease-out both',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        marquee: 'marquee 230s linear infinite'
      }
    }
  },
  plugins: []
}
