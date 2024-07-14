/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '37.5rem',
      },
      fontFamily: {
        alata: ['Alata', "sans-serif"]
      }
    },
  },
  plugins: [],
}