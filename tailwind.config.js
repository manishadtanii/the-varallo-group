/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0052B9",
        secondary: "#38ABD0",
      },
      backgroundImage: {
        cover_g: "background: linear-gradient(105.6deg, #0052B9 -15.15%, #38ABD0 99.71%);",
         btn_g: "background: linear-gradient(101.12deg, #48CAE4 0%, #0070FF 176.3%);",
      },
      fontFamily: {
        parkinsans: ["Parkinsans", "sans-serif"], // default font
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        topH: ["clamp(70px, 5vw, 150px)", { lineHeight: "1.1" }],
        h1: ["clamp(40px, 5vw, 70px)", { lineHeight: "1.1" }],
        h2: ["clamp(24px, 5vw, 60px)", { lineHeight: "1.1" }],
        h3: ["clamp(16px, 5vw, 40px)", { lineHeight: "1.1" }],
        p: ["clamp(14px, 5vw, 24px)", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};
