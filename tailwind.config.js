/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: { 50: '#f6f7f4', 100: '#e8eae3', 200: '#d3d8c8', 300: '#b4bda3', 400: '#96a27e', 500: '#7a8963', 600: '#606d4e', 700: '#4b5640', 800: '#3e4636', 900: '#353c30' },
        cream: { 50: '#fefdfb', 100: '#fdf9f0', 200: '#faf2de', 300: '#f5e6c4', 400: '#eed5a2', 500: '#e5c07e' },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
