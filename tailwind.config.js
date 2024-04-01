/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        pastel: "#B3C8CF",
        sea: "#BED7DC",
        beige: "#BED7DC",
        dark_beige: "#E5DDC5",
      },
      backgroundImage: {
        headerImage: "url('./src/assets/h4.jpg')",
      },
    },
  },
  plugins: [],
};
