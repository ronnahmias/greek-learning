/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

const colors = require("tailwindcss/colors");
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        pink: colors.pink,
        green: colors.teal,
        purple: colors.indigo,
        blue: colors.blue,
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "34px",
      "4xl": "48px",
      "5xl": "60px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
});
