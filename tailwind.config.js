module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        open: '"Open Sans", serif',
      },
      colors: {
        primary: '#FF007E',
        secondary: '#188FD9',
        light: '#F9FAFB',
        dark: '#030507',
        'neutral-superlight': '#F7F7F7',
      },
    },
    debugScreens: {
      position: ['bottom', 'right'],
      prefix: 'screen: ',
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
