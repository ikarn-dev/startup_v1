import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenCustom: "#A2F97D", // Custom green color
      },
      animation: {
        moveCard: "moveCard 8s ease-in-out infinite", // Increase left to right speed
      },
      keyframes: {
        moveCard: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" }, // Move to the right
          "100%": { transform: "translateX(0)" },   // Reset to left
        },
      },
    },
  },
  plugins: [],
};

export default config;
