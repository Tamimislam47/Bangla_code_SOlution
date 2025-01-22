/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      russo: ['Russo One', 'serif'],
    },
    extend: {
      animation: {
        rotate: 'rotate 50s linear infinite', 
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }, 
    },
  },
  plugins: [],
};
