/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29294a",
        secondary: "#6B21A8",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem",
          sm: "1rem",
        },
      },
    },
  },
  plugins: [],
};
