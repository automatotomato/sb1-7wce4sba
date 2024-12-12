/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'cosmic-pulse': 'cosmic-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'cosmic-pulse': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};