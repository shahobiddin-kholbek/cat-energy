/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': { 'max': '768px' },
      'lg': { 'min': '769px' },
    },


  },
  plugins: [],
}