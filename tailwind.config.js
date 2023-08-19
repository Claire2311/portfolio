/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "800px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        source: ['"Source Sans 3"', "serif"],
      },
      colors: {
        lightblue: "#F3F6FE",
      },
    },
  },
  plugins: [],
};
