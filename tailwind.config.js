/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        khand: ["Khand", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "46px": "46px",
        "10px": "10px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "26px": "26px",
        "30px": "30px",
        "36px": "36px",
      },
      colors: {
        customGrey: "#5A5A5A",
        customBlack: "#2B323A",
        customGolden: "#C5975B",
        customGrey1: "#F8F8F8",
        customGrey2: "#F5F5F5"
      },
      animation: {
        rotate360: 'rotate360 1s linear infinite',
        rotateNeg360: 'rotateNeg360 1s linear infinite',
        rotate180: 'rotate180 1s linear infinite',
        rotateNeg180: 'rotateNeg180 1s linear infinite',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateNeg360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        rotate180: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotateNeg180: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
      },
    },
  },
  plugins: [],
};