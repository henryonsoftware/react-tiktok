/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fe2c55',
        secondary: '#fe2c550f',
      },
      fontFamily: { primary: 'ProximaNova, Arial, Tahoma, PingFangSC, sans-serif' },
    },
  },
  plugins: [],
}