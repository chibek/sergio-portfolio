/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "border-width": "border-width 3s infinite alternate",
        "bounce-x": "bounce-x 1s infinite",
      },
      keyframes: {
        "border-width": {
          from: {
            width: "10px",
            opacity: "0",
          },
          to: {
            width: "200px",
            opacity: "1",
          },
        },
        "bounce-x": {
          "0%, 100%": { transform: "translate(20%)" },
          "50%": { transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
