/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D3B2D",
          light: "#3D4F3D",
          dark: "#1E2A1E",
        },
        accent: {
          DEFAULT: "#E8A838",
          light: "#F0BD5E",
          dark: "#D4952E",
        },
        success: "#4CAF50",
        warning: "#F4A460",
      },
    },
  },
  plugins: [],
};
