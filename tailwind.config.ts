import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-overused-grotesk)', 'var(--font-playfair-display)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenCustom: "#A2F97D", // Custom green color
      },
      animation: {
        infiniteScroll: 'infiniteScroll 25s linear infinite',
      },
      keyframes: {
        infiniteScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
