/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        chillzPinkStart: '#ff4bb1',
        chillzPinkEnd: '#ff51a8',
        conePink: '#ff1493',
        coneMagenta: '#ff00ff',
      },
      backgroundImage: {
        pinkGradient: 'linear-gradient(135deg, #ff4bb1 0%, #ff51a8 35%, #ff60c3 100%)',
        coneGradient: 'linear-gradient(135deg, #ff1493 0%, #ff00ff 50%, #ff69b4 100%)',
      },
      dropShadow: {
        image: '0 10px 25px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}


