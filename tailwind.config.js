/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '18px': '18px',
      },
      colors: {
        textColor: '#403833',
        customColor: '#FFEDE0',
      },
    },
  },
  plugins: [],
}

