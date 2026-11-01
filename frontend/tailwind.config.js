
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      colors: {
        ink: '#050505',
        panel: '#101014',
        line: '#292930',

        red: '#e5092f',
        'red-light': '#ff3657',
        'red-dark': '#8d001e',

        muted: '#92929d',
        silver: '#d8dce3',
        charcoal: '#17171c',
      },

      boxShadow: {
        redglow: '0 0 28px rgba(229, 9, 47, 0.25)',
        'red-glow-strong': '0 0 40px rgba(229, 9, 47, 0.45)',
        premium: '0 20px 60px rgba(0, 0, 0, 0.45)',
      },

      backgroundImage: {
        'carbyke-gradient':
          'linear-gradient(135deg, #080808, #19050b, #050505)',

        'red-gradient':
          'linear-gradient(120deg, #8d001e, #e5092f, #ff3657)',
      },

      transitionTimingFunction: {
        premium: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },

      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
    },
  },

  plugins: [],
};

