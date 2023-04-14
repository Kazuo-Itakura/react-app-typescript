/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-notojp)', ...fontFamily.sans],
      },
      colors: {
        // key color
        'main': '#F8A621',
        'main-sub': '#F28A10',
        'accent': '#ED7101',
        'base-bg': '#F8F8F8',
        'base': '#FFFFF',
        // text color
        'base-text': '#2E2F36',
        'sub-text': '#818395',
        'accent-text': '#E84A60',
        // ranking color
        'rank-1': '#FFBE2C',
        'rank-2': '#7A8DA7',
        'rank-3': '#D6835D',
        // tags color
        'tag-1': '#E84A60',
        'tag-2': '#3399BB',
        'tag-3': '#34BB54',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
