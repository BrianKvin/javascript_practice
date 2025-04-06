/** @type {import('tailwindcss').Config} */
export default {
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
        light: "#fff",
        primaryLight: "#f6f5f4",
        dark: "#000000",
        primaryDark: "#262626",
      },
      backgroundColor: {
        light: "var(--color-light)",
        "primary-light": "var(--color-primary-light)",
        dark: "var(--color-dark)",
        "primary-dark": "var(--color-primary-dark)",
      },
      textColor: {
        light: "var(--color-light)",
        "primary-light": "var(--color-primary-light)",
        dark: "var(--color-dark)",
        "primary-dark": "var(--color-primary-dark)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
