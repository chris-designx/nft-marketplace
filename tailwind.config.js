// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#061D3F",
        secondary: {
          DEFAULT: "#0166F6",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        cdextralight: ["CD-Extralight", "sans-serif"],
        cdlight: ["CD-Light", "sans-serif"],
        cdregular: ["CD-Regular", "sans-serif"],
        cdmedium: ["CD-Medium", "sans-serif"],
        cdsemibold: ["CD-Semibold", "sans-serif"],
        cdbold: ["CD-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};


