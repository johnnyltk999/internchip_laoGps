/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        primaryText: "#fff",
        primaryBg: "#646464",
        primarySubcontent: "#f15d31",
        primaryBase: "#fcb144",
        primaryAccent: "#1178bb",
      },
    },
  },
  plugins: [],
};
