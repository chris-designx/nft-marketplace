// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001F2D",
        secondary: "#4D626C",
        white: "#FFF",
        gray: "#74858C",
        black: "#000",
      },
      fontFamily: {
        inlight: ["Inter-Light", "sans-serif"],
        inregular: ["Inter-Regular", "sans-serif"],
        inmedium: ["Inter-Medium", "sans-serif"],
        insemibold: ["Inter-Semibold", "sans-serif"],
        inbold: ["Inter-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
