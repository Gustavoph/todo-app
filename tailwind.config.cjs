/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: {
        100: '#F2F2F2',
        200: '#D9D9D9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1A1A1A',
        700: '#0D0D0D',
      },
      purple: '#8284FA',
      'purple-dark': '#5E60CE',
      blue: '#4EA8DE',
      'blue-dark': '#1E6F9F',
      danger: '#E25858',

      white: '#FFFFFF',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
    },
    extend: {
      fontFamily: 'Inter, sans-serif',
    },
  },
  plugins: [],
}
