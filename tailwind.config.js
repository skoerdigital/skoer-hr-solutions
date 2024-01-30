/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/*/src/app/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

