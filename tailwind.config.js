/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      redaccented: "#f53838",
      white: "#fff",
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [],
};
