/** @type {import('tailwindcss').Config} */
var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"].concat(defaultTheme.fontFamily.sans),
        title: ["Open Sans"].concat(defaultTheme.fontFamily.sans),
      },
    },
  },
  plugins: [],
};
