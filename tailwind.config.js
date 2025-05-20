/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#132344',
        'light-pink': '#F8D7DA',
        'dark-pink': '#E5B5B9',
        'button-pink': '#E37282',
      },
      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif'],
      },
      animation: {
        'pulse-light': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}