/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker': ['Permanent Marker', 'cursive'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

