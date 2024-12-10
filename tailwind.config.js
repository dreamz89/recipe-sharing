/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange600: '#FF4B0A',
      orange500: '#FF6933',
      orange400: '#FF7F50',
      orange300: '#FFA585',
      orange200: '#FFC3AD',
      orange100: '#FFE1D6',
      green400: '#23BE7B',
      green300: '#30D990',
      green200: '#53DFA2',
      green100: '#75E6B5',
      black: '#2D2420',
      black85: 'rgba(45,36,32, 0.85)',
      white: '#FFFFFF',
      gray600: '#A9A09E',
      gray500: '#BCB5B3',
      gray400: '#CFCAC9',
      gray300: '#E2DFDF',
      gray200: '#F5F4F4',
      error: '#E43A48',
      success: '#1B998B',
      info: '#FED766',
    },
    extend: {},
  },
  plugins: [],
}

