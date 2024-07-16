/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '18px': '22px',
      },
      colors: {
        textColor: '#403833',
        customColor: '#FFEDE0',
      },
      screens:{
        mdScreen: '998px',

      },
      height:{
        customHeight: '42rem',
      },
      width:{
        customWidth: '42rem'
      }
    },
  },
  plugins: [],
}

