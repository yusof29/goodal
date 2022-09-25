/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#F6F4E8",
        bgcolor2: "#FCFCFF",
        bgcolor3: "#E6E7EB",
        primary: "#191718",
        secondary: "#2D3E4E",
      },
      fontFamily: {
        urbanist: "Urbanist",
        gotu: "Gotu",
      },
    },
  },
  plugins: [],
};
