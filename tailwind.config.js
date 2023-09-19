/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {},
      fontFamily: {
        "press-start-2p": ["'Press Start 2P'", "cursive"],
        vt323: ["'VT323'", "monospace"],
        "pokemon-solid": ["'Pokemon Solid'", "sans-serif"],
      },
      colors: {
        "mine-shaft": "#3d3d3d",
        cinnabar: "#e84630",
        casablanca: "#f5b056",
        mercury: "#e8e8e8",
        "boston-blue": "#4589c4",
      },
      content: {
        height: "Height",
        weight: "Weight",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pikachu-banner": "url('/bgpng.png')",
        "bulbasaur-1x":
          "url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/42746dee22312cb8c71378e33d9005b5ad754d53.webp)",
        "stats-card": "url('/card_stats.svg')",
        "chevron-left": "url('/chevron-left.svg')",
        "chevron-right": "url('/chevron-right.svg')",
      },
      scale: {
        "-100": "-1",
      },
      gridTemplateColumns: {
        custom: "1fr 5px 1fr",
      },
      gridTemplateRows: {
        page: "80px 1fr 110px",
        "about-card": "40px 1fr 1fr",
      },
      keyframes: {
        shineGreen: {
          "0%": { backgroundColor: "#00ffff", opacity: 0 },
          "25%": { backgroundColor: "#00ff00" },
          "50%": { backgroundColor: "#00ffff", opacity: 1 },
          "75%": { backgroundColor: "#00ff00" },
          "100%": { backgroundColor: "#00ffff", opacity: 0 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        // Aquí está utilizando un bucle para generar múltiples animaciones
        ...Array.from({ length: 16 }).reduce((acc, _, index) => {
          acc[`fromRightToZero-${index * 100}`] = {
            "0%": {
              transform: `translateX(${1500 - index * 100}%)`,
              scale: 0,
              opacity: 0,
            },
            "100%": { transform: "translateX(0)", scale: "100%", opacity: 1 },
          };
          acc[`fromZeroToLeft-${index * 100}`] = {
            "0%": { transform: "translateX(0)", scale: "100%", opacity: 1 },
            "100%": {
              transform: `translateX(${-index * 100}%)`,
              scale: 0,
              opacity: 0,
            },
          };
          return acc;
        }, {}),
      },
      animation: {
        shineGreen: "shineGreen ease-in-out",
        fadeOut: "fadeOut 0.6s ease-in-out",
        fadeIn: "fadeIn 0.6s ease-in-out",
        // Y la misma lógica aquí para referenciar las animaciones
        ...Array.from({ length: 16 }).reduce((acc, _, index) => {
          acc[`fromRightToZero-${index * 100}`] = `fromRightToZero-${
            index * 100
          } 0.6s ease-in-out`;
          acc[`fromZeroToLeft-${index * 100}`] = `fromZeroToLeft-${
            index * 100
          } 0.6s ease-in-out`;
          return acc;
        }, {}),
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
