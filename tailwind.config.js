/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      height: {
        'screen/2': '50vh',
        'screen/3': '33.333333vh',
      },
      colors: {
        'neon-blue': '#00e1ff',
        'neon-pink': '#f618f6',
        'neon-green': '#0cff0c',
        'neon-yellow': '#ffff33',
        'dark-bg': '#0c0e1f',
        'darker-bg': '#050714',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Orbitron', 'sans-serif'],
        'greatVibes': ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00e1ff, 0 0 15px #00e1ff',
        'neon-pink': '0 0 5px #f618f6, 0 0 15px #f618f6',
        'neon-green': '0 0 5px #0cff0c, 0 0 15px #0cff0c',
        'neon-yellow': '0 0 5px #ffff33, 0 0 15px #ffff33',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 7px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.5)' },
          '100%': { textShadow: '0 0 10px #00e1ff, 0 0 20px #00e1ff, 0 0 30px #00e1ff' },
        },
      },
      /* We're not using these backgrounds in the Tailwind config anymore,
       * since we're using direct style attributes in the Layout component */
    },
  },
  plugins: [],
};