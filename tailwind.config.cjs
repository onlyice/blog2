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
      colors: {
        tx1: "hsl(0,0%,6%)",
        tx2: "hsl(0,0%,46%)",
        tx3: "hsl(0,0%,71%)",
        accent: "hsl(201,17%,50%)",
        border: "hsl(0,0%,90%)",
        bg2: "#f6f6f6",
      },
      maxWidth: {
        prose: "40rem",
      },
      fontSize: {
        "heading-1": ["1.5em", { fontWeight: "600" }],
        "heading-2": ["1.25em", { fontWeight: "600" }],
        "heading-3": ["1.1em", { fontWeight: "500" }],
        "heading-4": ["1em", { fontWeight: "500" }],
        "heading-5": ["0.9em", { fontWeight: "500" }],
        "heading-6": ["0.85em", { fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
