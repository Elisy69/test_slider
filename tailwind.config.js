/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "manrope": ["manrope"],
      "headers": ["headers"],
    },
    screens: {
      "mob": { "max": "1200px" },
    },
  },
  plugins: [],
};
