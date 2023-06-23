/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      'orange-sirene-light': '#fcb8ae',
      'orange-sirene': '#f9735d',
      'orange-sirene-dark': '#f2371a',
      'blue-sirene':"#0C2A44"
    },},
  },
  plugins: [],
}

