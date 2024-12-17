/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#0E0D0D',
        darkGrey: '#161618',
        grey: '#222323',
        lightGrey: '#525252',
      }
    },
  },
  plugins: [],
};
