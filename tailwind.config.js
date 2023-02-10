/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        md: "769px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#51CE0F",
          secondary: "#3F567A",
          accent: "#8598AD",
          neutral: "#3d4451",
          neutral2: "#ECF2F7",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
