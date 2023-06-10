/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        custom: "#111432",
        gold: "#ffd900",
        darkgray: "rgba(156, 154, 154, 0.1)",
        primary: "#0EB461",
        dark: "#111432",
        secondarydark: "#ff4635",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.css"],
};
