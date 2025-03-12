export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f0c29',
          800: '#1a1744',
          700: '#24243e',
          600: '#302b63',
          500: '#3b3576',
          400: '#463f89',
          300: '#514a9c',
          200: '#6158b5',
          100: '#7a73c7',
          50: '#9490d8',
        },
        secondary: {
          900: '#1e1e2e',
          800: '#292942',
          700: '#353556',
          600: '#41416a',
          500: '#4d4d7e',
          400: '#595992',
          300: '#6565a6',
          200: '#7171ba',
          100: '#8484cc',
          50: '#9797de',
        },
        neon: {
          pink: '#ff007f',
          cyan: '#00d4ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        'gradient-neon': 'linear-gradient(to right, #00d4ff, #ff007f)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 10px rgba(0,212,255,0.5)' },
          '100%': { 'box-shadow': '0 0 20px rgba(0,212,255,0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}