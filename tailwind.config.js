/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        euclid: ['EuclidCircularA', 'sans-serif'],
      },
      keyframes: {
        ripple: {
          '0%': {
            width: '0px',
            height: '0px',
            opacity: '0.6',
            transform: 'translate(-50%, -50%) scale(0)',
          },
          '100%': {
            width: '200px',
            height: '200px',
            opacity: '0',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
      },
      animation: {
        ripple: 'ripple 0.6s ease-out',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '575px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '1xl': '1400px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
