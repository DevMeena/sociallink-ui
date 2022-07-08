module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 30px 35px rgba(0, 0, 0, 0.8)',
        '4xl': [
          '0 20px 25px rgba(0, 0, 0, 0.25)',
          '0 20px 25px rgba(0, 0, 0, 0.15)',
        ],
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        text: 'text 5s ease infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
