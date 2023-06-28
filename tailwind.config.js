/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sans" : "'Jost', sans-serif"
      },
      colors: {
        "dmp-peach" : "#E7816B",
        "dmp-peach-light" : "#FFAD9B",
        "dmp-black" : "#1D1C1E",
        "dmp-dark-gray" : "#333136",
        "dmp-light-gray" : "#F1F3F5",
        "dmp-grid" : "#FDF3F0"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

