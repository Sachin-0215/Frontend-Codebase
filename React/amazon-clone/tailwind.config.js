const { cloneElement } = require('react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone:{
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          light_red:"#ffb3b3",
          DEFAULT: "#131921"
      }
    }},
  },
  plugins: [],
}