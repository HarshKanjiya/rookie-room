/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'boston-blue': {
          '50': '#f1f9fa',
          '100': '#dbecf2',
          '200': '#bbdae6',
          '300': '#8cc0d4',
          '400': '#4892b1',
          '500': '#3a80a0',
          '600': '#336987',
          '700': '#2f576f',
          '800': '#2d495d',
          '900': '#2a3f4f',
          '950': '#172735',
        },

      }
    },
  },
  plugins: [require('daisyui'),],
}