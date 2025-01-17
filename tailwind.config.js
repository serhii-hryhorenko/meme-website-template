/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "mona-sans": ["Mona Sans", "serif"],
      },
    },
  },
  plugins: [],
}

