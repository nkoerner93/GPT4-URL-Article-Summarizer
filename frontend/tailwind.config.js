/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{html,js,jsx}", "./pages/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
