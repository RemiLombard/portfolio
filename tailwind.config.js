/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)'
        },
        cream: {
          DEFAULT: 'var(--color-bg-cream)',
          light: 'var(--color-bg-light)'
        },
        dark: 'var(--color-bg-dark)',
        accent: {
          gold: 'var(--color-accent-gold)',
          brown: 'var(--color-accent-brown)',
          sage: 'var(--color-accent-sage)'
        }
      },
      fontFamily: {
        title: ['Anton', 'sans-serif'],
        sans: ['Lato', 'sans-serif']
      },
      borderWidth: {
        '3': '3px'
      },
      boxShadow: {
        vintage: '4px 4px 0px var(--color-text-dark)',
        'vintage-lg': '6px 6px 0px var(--color-text-dark)',
        'vintage-hover': '2px 2px 0px var(--color-text-dark)'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
