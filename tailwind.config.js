/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#D97706',
        'orange-200': '#FED7AA',
      },
    },
  },
  plugins: [],
}

