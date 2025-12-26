import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#2D1B4E',
        accent: '#D4AF37',
        secondary: '#4A9B9B',
      },
    },
  },
  plugins: [],
} satisfies Config;
