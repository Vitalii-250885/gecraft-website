/** @type {import('tailwindcss').Config} */

import { black, transparent, white } from 'tailwindcss/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white,
      black,
      transparent,
      bgHeader: '#EBEBEB',
      basic: '#1A1A1A',
      buttonGroup: '#AFAFAF4D',
      buttonHover: '#BEE0FF',
      ourServicesBtn: '#C3C3C3',
      cursor: '#1A1A1ACC',
      cursorHover: '#1A1A1A99',
    },
    extend: {
      screens: {
        '357': '357px',
        sm: '391px',
        md: '769px',
        lg: '1134px',
        '1400': '1400px',
        '1500': '1500px',
        '1600': '1600px',
        '2xl': '1923px',
        '3xl': '2620px',
        '2800': '2800px',
        '3000': '3000px',
        '3100': '3100px',
        '4xl': '3230px',
        '3300': '3300px',
        '3350': '3350px',
      },

      fontFamily: {
        sans: 'Be Vietnam Pro',
      },
    },
  },
}
