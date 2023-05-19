/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw' : '(min-aspect-ratio: 3/2' },
        'tallscreen': {'raw' : '(min-aspect-ratio: 1/2' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaley(0)' },
          '80%': { transform: 'scaley(1.2)' },
          '100%': { transform: 'scaley(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("child-cards", "#cards &");
    })
   ],
}

