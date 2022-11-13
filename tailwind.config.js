/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fe2c55',
        'primary-dark': '#e0274b',
        secondary: '#fe2c550f',
        'badge-blue': '#20d5ec',
      },
      fontFamily: {
        primary: 'ProximaNova, Arial, Tahoma, PingFangSC, sans-serif',
        secondary: 'SofiaPro, Arial, Tahoma, PingFangSC, sans-serif',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
