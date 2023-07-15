/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#3A36DB',
        textA: '#06152B',
        textB: '#272727',
        textC: '#767676',
        default: '#9ca3af',
        clean: '#e5e7eb',
        error: '#C73658'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
