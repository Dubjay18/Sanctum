/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1eb0ea",

        secondary: "#f2689f",

        accent: "#3ffcec",

        neutral: "#262f36",

        "base-100": "#383b43",

        info: "#62bed0",

        success: "#116a46",

        warning: "#e68405",

        error: "#ea4873",
      },
    },
  },
  plugins: [],
};
