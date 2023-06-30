/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx, vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.{js,ts,jsx,tsx,vue}",
    "./nuxt.config.{js,ts,jsx,tsx}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
