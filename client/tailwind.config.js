module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F2FAFA',
          200: '#DFE6E6',
          300: '#EBF2F2',
          400: '#C6CCCC',
          500: '#F3FBfB', // main
          600: '#636666',
        },
        secondary: {
          100: '#DCF3F5',
          200: '#C4F5F5',
          300: '#C8FAFA',
          400: '#B4E0E0',
          500: '#BAE8E8', // main
          600: '#627A7A'
        },
        accent: {
          100: '#FEEEA3',
          200: '#FFE96B',
          300: '#E6C302',
          400: '#BFA302',
          500: '#FFD803', // main
          600: '#E6C302',
        },
        neutral: {
          100: '#7A788F',
          200: '#B0AECF',
          300: '#3A3944',
          400: '#272343',
          500: '#272343', // main
          600: '#2C2B33',
        },

      },
      width: {
        '175': '43.75rem',
      },
      minWidth: {
        '100': '25rem',
        '80': '20rem',
        '60': '15rem',
        '48': '12rem',
        '12': '3rem',
      },
      minHeight: {
        '12': '3rem',
        '20': '5rem',
        '48': '12rem'
      }
    },
  },
  plugins: [],
}