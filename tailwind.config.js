/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: "23.75em" /* 380px */,
      sm: "30em" /* 480px */,
      md: "37.5em" /* 600px */,
      lg: "56.25em" /* 900px */,
      xl: "75em" /* 1200px */,
      "2xl": "87.5em" /* 1400px */,
      big: "100em" /* 1600px */,
    },
    extend: {
      colors: {
        cyan: " hsl(180, 66%, 49%)",
        cyanLight: " hsl(180, 66%, 69%)",
        darkViolet: " hsl(257, 27%, 26%)",
        red: " hsl(0, 87%, 67%)",
        grayishViolet: " hsl(257, 7%, 63%)",
        veryDarkBlue: " hsl(255, 11%, 22%)",
        veryDarkViolet: " hsl(260, 8%, 14%)",
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
      transitionTimingFunction: {
        bump: "cubic-bezier(0.7, -0.5, 0.35, 1.4)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
