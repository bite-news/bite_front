import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "var(--max-width)",
      },
      fontFamily: {
        news: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
