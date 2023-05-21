/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C733D",
        secondary: {
          100: "#2b3033",
          900: "#1a1d1f",
        },
      },
    },
  },
  plugins: [],
};
