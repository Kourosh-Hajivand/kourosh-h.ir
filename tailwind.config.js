/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    ,
  ],
  theme: {
    extend: {
      fontFamily: {
        IransansThin: "Iransans-thin",
        Iransansblack: "Iransans-Black",
        IransansBold: "Iransans-Bold",
        IransansMD: "Iransans-MD",
        Rubik: "Rubik",
        RubikMD: "Rubik-md",
        RubikbBold: "Rubik-bold",
        RubikBlack: "Rubik-Black",
        RubikLight: "Rubik-light",
        RubikSemiBold: "Rubik-semibold",
      },
    },
  },
  plugins: [],
};
