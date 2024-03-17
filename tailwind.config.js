/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
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
      purple: '#A445ED',
      red: '#FF5252',
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
