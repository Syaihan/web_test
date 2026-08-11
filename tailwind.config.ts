import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D1117",
          surface: "#141B23",
          raised: "#1A222C",
          border: "#232C38",
        },
        brass: {
          DEFAULT: "#D4A24C",
          soft: "#E8C77E",
          dim: "#8A6B33",
        },
        teal: {
          DEFAULT: "#4FB8A8",
          soft: "#8FDACD",
        },
        coral: {
          DEFAULT: "#E0644C",
          soft: "#F2A390",
        },
        ivory: {
          DEFAULT: "#E6E8EB",
          muted: "#8891A0",
          faint: "#5B6472",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(230,232,235,0.035) 1px, transparent 0)",
      },
      backgroundSize: {
        "grain-size": "18px 18px",
      },
    },
  },
  plugins: [],
};
export default config;
