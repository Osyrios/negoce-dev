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
      white: '#f0f0f3',
      red: '#e71414',
      titles: {
        secondary : '#1d8bd4'
              },
      background:'#d6e7ec',
      transparent:'transparent',
      textColor:{
        navbar : '#0e0e9a',
                },

    },

  },
  plugins: [],
}

