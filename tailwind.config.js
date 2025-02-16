/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        gold: {
          50: "#fcf7f0",
          100: "#f9eddb",
          200: "#f2d8b6",
          300: "#e7b87f",
          400: "#df9a58",
          500: "#d77f38",
          600: "#c9682d",
          700: "#a75127",
          800: "#864226",
          900: "#6c3822",
        },
        tuna: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b7b9c2",
          400: "#8f92a1",
          500: "#727585",
          600: "#5c5e6d",
          700: "#4b4d59",
          800: "#40424c",
          900: "#34353c", // bg secondary
          950: "#26262b",
        },
      },
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#e7b87f",
        secondary: "#34353c",
        one: "#5F60602",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#e7b87f",
        secondary: "#34353c",
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
