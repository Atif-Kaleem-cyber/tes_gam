/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'neon-pink': 'var(--neon-pink)',
        'neon-green': 'var(--neon-green)',
        'neon-yellow': 'var(--neon-yellow)',
        'neon-purple': 'var(--neon-purple)',
        'bg-dark': 'var(--bg-dark)',
        'bg-darker': 'var(--bg-darker)',
        'bg-card': 'var(--bg-card)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter: 'brightness(1)'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'brightness(0.8)'
          },
        },
        glow: {
          '0%': {
            filter: 'brightness(1)',
          },
          '100%': {
            filter: 'brightness(1.3)',
          },
        }
      },
      boxShadow: {
        'neon-blue': '0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue)',
        'neon-pink': '0 0 5px var(--neon-pink), 0 0 10px var(--neon-pink)',
        'neon-green': '0 0 5px var(--neon-green), 0 0 10px var(--neon-green)',
      }
    },
  },
  plugins: [
    // Add line-clamp functionality
    function({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-1': {
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
