/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#f85559',
        'grey-light': '#A0A0A0',
        'gray-medium': '#818181',
        
      },
      fontFamily:{
        'lato':['"Lato"'],
      }
    },
  },
  plugins: [require('daisyui'),],
  
}
