const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      transparent: "transparent",
      current: "currentcolor",
      green: {
        midnight: "hsl(186, 98%, 17%)",
        jungle: "hsl(186, 100%, 14%)",
        sacremento: "hsl(186, 96%, 10%)",
        dark: "hsl(186, 100%, 8%)",
      },
      blue: {
        rapture: "hsl(179, 42%, 63%)",
        police: "hsl(187, 41%, 29%)",
      },
      red: {
        coral: "hsl(0, 87%, 73%)",
      },
    },

    letterSpacing: {
      12: "0.0075rem",
    },

    lineHeight: {
      none: "1",
      "18/13": "1.385",
      "25/15": "1.666",
      "28/15": "1.866",
      "28/18": "1.556",
      "48/32": "1.5",
      "56/64": "0.875",
      "100/64": "1.563",
    },

    fontFamily: {
      sans: ["Livvic", "sans-serif"],
    },

    fontSize: {
      "10p": "0.625rem",
      "13p": "0.8125rem",
      "15p": "0.9375rem",
      "18p": "1.125rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      25: "6.25rem",
    },

    minHeight: {
      button: "3rem",
      screen: "100vh"
    },

    maxWidth: {
      "none": "none",
      "lg-container": "69.375rem",
      "md-container": "35.8125rem",
    },

    extend: {
      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        24: "8.75rem",
        25: "6.25rem",
        35: "8.75rem",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus-visible"]);
    }),
  ],
};
