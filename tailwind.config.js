/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "fira-sans": ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
    require("tw-elements/dist/plugin.cjs"),
  ],
});
