/** @type {import('tailwindcss').Config} */

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

      }
    },
  },
  plugins: [ ],
}

