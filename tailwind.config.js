/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
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
=======
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#77BEFF",
        secondPrimary: "#477BE2",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(90deg, #2563eb, #1d4ed8)",
      },
      fontSize: {
        "primary-h1": "3rem",
      },
    },
  },
  plugins: [require("daisyui")],
>>>>>>> 4acd6b694de03d8d0ca0bf3f0180575845c2254e
};
