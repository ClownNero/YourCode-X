/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1160px',
      'xl': '1280px',
      '2xl': '1560px',
    },
    extend: {
      colors: {
        brand: "#F96162",
        search: "#2D5FFF",
        Result:"#585858",
      },
      boxShadow: {
        up: "0 -4px 6px -1px rgba(0,0,0,0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        text: "0 4px 4px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        yourcodex: "url('/public/images/yourcodex.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
