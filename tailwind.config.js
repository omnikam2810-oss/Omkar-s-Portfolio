/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 this enables theme switching via a CSS class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
