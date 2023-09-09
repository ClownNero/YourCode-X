/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F96162",
        serch: "#2D5FFF",
      },
      boxShadow: {
        up: "0 -4px 6px -1px rgba(0,0,0,0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
