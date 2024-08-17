/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hammersmith: ['Hammersmith One', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        readex: ['Readex Pro', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none',  /* Safari va Chrome */
        },
      });
    },
  ],
}

