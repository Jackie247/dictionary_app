/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    extend: {},
    colors: {
      'darkest-black': '#050505',
      'dark-black': '#1F1F1F',
      'lighter-black': '#2D2D2D',
      'light-black': '#3A3A3A',
      grey: '#757575',
      'light-grey': '#E9E9E9',
      'very-light-grey': '#F4F4F4',
      white: '#FFFFFF',
      'accent-purple': '#8F19E8',
      'custom-purple': '#A445ED',
      red: '#FF5252',
    },
  },
};
