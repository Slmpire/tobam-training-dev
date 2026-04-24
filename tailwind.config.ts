import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#571244",
          dark: "#1d0617",
          deeper: "#2c0922",
          darkest: "#480f39",
          muted: "#8f6182",
        },
        accent: {
  red: "#ef4353",
},
lavender: "#ede8f0",
lavenderDark: "#ddd0e6",
        neutral: {
          50: "#f9f9f9",
          100: "#f8f8f8",
          200: "#ddd0da",
          400: "#b6b8bc",
          600: "#696969",
          900: "#151515",
          950: "#11040e",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        display: ["56px", { lineHeight: "72.8px", fontWeight: "700" }],
        h1: ["48px", { lineHeight: "65.5px", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "52px", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "41.6px", fontWeight: "600" }],
        h4: ["24px", { lineHeight: "36px", fontWeight: "600" }],
        h5: ["20px", { lineHeight: "30px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "27px" }],
        body: ["16px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "21px" }],
        caption: ["12px", { lineHeight: "18px" }],
      },
      spacing: {
        "15": "15px",
        "17": "17px",
        "19": "19px",
        "21": "21px",
        "23": "23px",
        "25": "25px",
        "30": "30px",
        "38": "38px",
        "41": "41px",
        "53": "53px",
        "62": "62px",
        "100": "100px",
        "112": "112px",
        "120": "120px",
      },
      maxWidth: {
        content: "1312px",
      },
      letterSpacing: {
        wide: "0.6px",
        wider: "0.72px",
        widest: "1.2px",
      },
    },
  },
  plugins: [],
};

export default config;