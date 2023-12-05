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
      scrollbar:['#0085FF'],
      colors: {
        brand: "#F96162",
        search: "#2D5FFF",
        Result:"#585858",
      },
      boxShadow: {
        up: "0 -4px 6px -1px rgba(0,0,0,0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        custom: "5px 5px 20px 0px rgba(0,0,0,0.75)",
        detail:'0px 4px 4px 0px rgba(0,0,0,0.25)',
        change:'4px 8px 5px 0px rgba(0,0,0,0.25)'
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
  variants: {
    extend: {
      // 스크롤바 variant 추가
      scrollbar: ['rounded']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};