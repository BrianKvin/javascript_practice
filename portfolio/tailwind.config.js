/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#EEEEEE", //#F0F0F0
        dark: "#1E1E1E",
        primary: "#fcfcfc",
        secondary: "#000000",
        muted: "#C0C0C0",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
