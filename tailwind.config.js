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
  },
  plugins: [],
}

