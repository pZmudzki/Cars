/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Bebas Neue", "sans-serif"],
      primary: ["Roboto Condensed", "sans-serif"],
      secondary: ["Roboto Flex", "sans-serif"],
    },
    extend: {
      colors: {
        gray: {
          primary: "#F7F7F7",
          fontPrimary: "#282828",
          fontSecondary: "#1D1D1B",
        },
        blue: {
          primary: "#0147FF",
        },
      },
    },
  },
  plugins: [],
};
