/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      fira: 'overpass'
    },
    screens: {
      sm : '400px',
      xl : '1024px'
    }
  },
  plugins: [],
}