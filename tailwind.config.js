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
      white: '#c9c9cc',
      red: '#e71414',
      titles: {
        secondary : '#1978b7'
              },
      background:'#939494',
      transparent:'transparent',
      textColor:{
        navbar : '#3f3f41',
                },

    },

  },
  plugins: [],
}

