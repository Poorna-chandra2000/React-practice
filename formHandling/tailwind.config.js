/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

