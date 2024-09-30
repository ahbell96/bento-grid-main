/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      MyWebFont: ["MyWebFont", "sans-serif"],
      MyWebFont2: ["MyWebFont2", "sans-serif"],
      MyWebFont3: ["MyWebFont3", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
