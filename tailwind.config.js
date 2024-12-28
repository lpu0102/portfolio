/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d5dfe9',
          300: '#b3c5d9',
          400: '#8aa3c4',
          500: '#6a84b0',
          600: '#526b95',
          700: '#435679',
          800: '#3a4965',
          900: '#344056',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
          },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '481px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};