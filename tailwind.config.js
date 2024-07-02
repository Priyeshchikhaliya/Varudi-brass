/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066F9",
        secondary: "#1EACFC",
        text_primary: "#14141E",
        redish: "#F92121",
        opacity_black: "rgba(20, 20, 30, 0.75)",
        opacity_blue: "rgba(0, 102, 249, 0.05)",
        opacity_blue_2: "rgba(0, 102, 249, 0.08)"

      },
      fontFamily: {
        // "nunito-bold": ["Nunito Bold", "sans-serif"],
        // "nunito-black": ["Nunito Black", "sans-serif"],
        // "nunito-extra-bold": ["Nunito Extra Bold", "sans-serif"],
        // "nunito-extra-light": ["Nunito Extra Light", "sans-serif"],
        // "nunito-light": ["Nunito Light", "sans-serif"],
        "nunito-medium": ["Nunito Medium", "sans-serif"],
        "nunito-regular": ["Nunito Regular", "sans-serif"],
        "roboto-regular": ["Roboto Regular", "sans-serif"],
        // "nunito-semibold": ["Nunito Semibold", "sans-serif"],
        // "nunito-thin": ["Nunito Thin", "sans-serif"],
      },
    },

  },
  plugins: [],
};
