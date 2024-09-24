/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "otterco-regular": ["Otterco-Regular", "sans-serif"],
        "otterco-medium": ["Otterco-Medium", "sans-serif"],
        "otterco-bold": ["Otterco-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
