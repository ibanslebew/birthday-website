/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
      },
      colors: {
        maroon: {
          950: "#2b0a1f",
          900: "#3d0f2b",
        },
        blush: "#f7c8dc",
      },
    },
  },
  plugins: [],
};