/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./apps/*/src/app/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    ...defaultTheme,
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr 30px'
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}




