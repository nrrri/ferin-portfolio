/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '47.5rem',
      },
      fontFamily: {
        alata: ['Alata', "sans-serif"],
        antonio: ['Antonio', "sans-serif"]
      },
      colors: {
        primary300: '#FF6A49',
        primary200: '#FF9191',
        primary100: '#FFB2B2',
        secondary200: '#477BFF',
        secondary100: '#A4BDFF',
        bgday200: '#EFEBE5',
        bgday100: '#F9F6F2',
        bgdark200: '#262D3C',
        bgdark100: '#303E59',
        grey400: '#505050',
        grey300: '#B5B5B5',
        grey200: '#E1E1E1',
        grey100: '#F9F9F9'
      },
    },
  },
  plugins: [],
}