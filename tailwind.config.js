/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 0.3s ease forwards",
        slideCart: "slideCart 0.3s ease forwards",
        slideSearchWindow: "slideSearchWindow 0.3s ease forwards",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateY(-60px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },

        slideCart: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },

        slideSearchWindow: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },

      },
    },
  },
  plugins: [],
}

