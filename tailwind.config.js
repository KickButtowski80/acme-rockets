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
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaley(0)', display: 'block' },
          '80%': { transform: 'scaley(1.2)' },
          '100%': {
            transform: 'scaley(1)',
            
          },
        },
        'close-menu': {
          '0%': { transform: 'scaley(1)' },
          '80%': { transform: 'scaley(0.5)' },
          '100%': { transform: 'scaley(0)',
          display: 'none' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child-cards", "#cards &");
    })
  ],
}

