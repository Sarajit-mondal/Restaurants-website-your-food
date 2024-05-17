/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "gold-600": "#BB8506",
      "gold-500": "#D99904",
      dark: "#151515",
      "opacity-color": "#15151599",
      "light-gray": "#D9D9D9",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
