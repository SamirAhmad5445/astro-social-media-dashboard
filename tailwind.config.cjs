/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // body background
        body: {
          1: "hsl(var(--color-body1) / <alpha-value>)",
          2: "hsl(var(--color-body2) / <alpha-value>)",
        },
        // text color
        neutral: {
          1: "hsl(var(--color-neutral1) / <alpha-value>)",
          2: "hsl(var(--color-neutral2) / <alpha-value>)",
        },
        // card background
        card: "hsl(var(--color-card) / <alpha-value>)",
        "card-hover": "hsl(var(--color-card-hover) / <alpha-value>)",
        toggle: {
          1: "hsl(var(--color-toggle1) / <alpha-value>)",
          2: "hsl(var(--color-toggle2) / <alpha-value>)",
        },
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        instagram: {
          1: "hsl(37, 97%, 70%)",
          2: "hsl(329, 70%, 58%)",
        },
        positive: "hsl(163, 72%, 41%)",
        negative: "hsl(356, 69%, 56%)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    backgroundSize: {
      full: "100%",
    },
  },
  plugins: [],
};
