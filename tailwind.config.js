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
