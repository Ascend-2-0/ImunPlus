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
        'sans': ['Poppins', 'sans-serif'], // This makes Poppins the default font
        'poppins': ['Poppins', 'sans-serif'], // This allows you to use font-poppins class
      },
      animation: {
        'pulse-light': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}