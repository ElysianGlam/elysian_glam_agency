/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
    },
    colors: {
      primary: {
        50: "#c6dac1",
        100: "#b9d2b7",
        200: "#aecbae",
        300: "#a1c4a5",
        400: "#94bd9c",
        500: "#87b693",
        600: "#7aae8a",
        700: "#6da681",
        800: "#609e78",
        900: "#53966f",
        950: "#468e66",
      },
      secondary: {
        50: "#f3ded1",
        100: "#e8d7c7",
        200: "#dcc0b3",
        300: "#cfa99f",
        400: "#c2928b",
        500: "#b57b77",
        600: "#a86463",
        700: "#9b4d50",
        800: "#8e363d",
        900: "#811f2a",
        950: "#740817",
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#515152",
        800: "#464646",
        900: "#292929",
        950: "#16161b",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
