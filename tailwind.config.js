/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      container:{
        center: true,
        padding: '1rem'
      },
    },
  },
  plugins: [],
}

