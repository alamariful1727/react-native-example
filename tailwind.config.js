/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { typGreen: '#3dcab1', typHeaderBlack: '#222222', typBodyBlack: '#292929', typDarkBlue: '#051229' },
    },
  },
  plugins: [],
};
