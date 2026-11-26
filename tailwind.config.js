/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        bordeaux: { DEFAULT: "#7b1e3a", dark: "#5e152c", light: "#f6e9ed" },
        cream: "#faf7f2",
        ink: "#1c1917",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "Cambria", '"Times New Roman"', "serif"],
        sans: ["Inter", "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
