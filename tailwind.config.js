/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'designer':['designerRegular','Georgia'],
      'robotoRegular':['robotoRegular', 'Georgia'],
      'robotoItalic':['robotoItalic','Georgia'],
      'robotoBold':['robotoBold','Georgia']
    },
    colors:{
      titles: {
        secondary : '#1d8bd4'
      },

      background:'#bfd8e3'
    },
      transparent:'transparent'
  },
  plugins: [],
}

