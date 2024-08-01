/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'max': '431px' },
      'md': { 'min': '431px', 'max': '768px' },
      'lg': { 'min': '769px' },
    },


  },
  plugins: [],
}