/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
    "./index2.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
