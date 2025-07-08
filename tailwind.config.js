/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Vite utilise ./src/ par défaut
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 188, 212)", // Cyan
        secondary: "rgb(49, 30, 64)", // Violet foncé
        neutral: "#f8f9fa", // Fond clair
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
