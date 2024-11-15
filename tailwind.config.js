/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "startPageBG": 'url("./assets/img/cluedoBG.jpg")'
      }
    },
  },
  plugins: [],
}