import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme1: "#FF3D00",
        theme2: "#2196F3",
        theme3: "#4CAF50",
        theme4: "#9C27B0",
        theme5: "#FFEB3B",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
