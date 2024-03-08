/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'min-500': '500px',
      'min-768': '768px',
      'min-1000': '1000px'
    }
  },
  plugins: [],
}

