/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '549px',
      // => @media (min-width: 550px) { ... }

      'md': '833px',
      // => @media (min-width: 834px) { ... }

      'lg': '1199px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1439px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1919px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'grayStyle': '#7C7C7C',
      'greyText': 'rgba(167, 167, 167, 1)',
      'black': '#1b1b1b',
      'hoverStyle': '#323232',
      'purple': '#A242D1',
      'lightBlue': '#1EAAC9',
      'red': '#B42A5B',
      'yellow': '#F2DC66',
      'dividers': '#EBEBEB'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
