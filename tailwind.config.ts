import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#17171d",
        surface: "#0f0f12",
        muted: "#9ca3af",
        accent: "#d4af37",
        border: "#2b2f36"
      },
      boxShadow: {
        accent: "0 0 0 1px rgba(212, 175, 55, 0.18), 0 18px 40px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
