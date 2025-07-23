/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bannerImg:"url('/homebg.png')",
        banImg:"url('/homemd.png')",
      },
      colors: {
        background: "#ffffff",
        prime: {
          50: "#605DEC",
          100:" #1a1953",
        },
        letter: "#7C8DB0",
      },
    },
  },
  plugins: [],
};
