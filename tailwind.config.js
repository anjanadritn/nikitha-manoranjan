/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#1C0609',
          900: '#2C090E',
          800: '#3A080E',
          700: '#4A0E17',
          600: '#5C121D',
          500: '#6A1B29',
          400: '#8A2637',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFF1AC',
          300: '#FFE277',
          400: '#F5D040',
          500: '#D4AF37', // Main Antique Gold
          600: '#B38D22',
          700: '#8C6914',
          800: '#6B4E10',
          900: '#4A340B',
        },
        champagne: {
          DEFAULT: '#F3E5AB',
          light: '#FAF5E8',
          paper: '#FDFBF7',
        },
        warm: {
          dark: '#1A120B',
          muted: '#4A3E3D',
          cream: '#FAF5E8',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'cinzel-decor': ['"Cinzel Decorative"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
        kannada: ['"Noto Serif Kannada"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF1AC 50%, #D4AF37 100%)',
        'maroon-radial': 'radial-gradient(circle at center, #5C121D 0%, #2C090E 70%, #1C0609 100%)',
        'parchment-pattern': "radial-gradient(#D4AF37 0.5px, transparent 0.5px), radial-gradient(#D4AF37 0.5px, #FAF5E8 0.5px)",
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.4)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.6)',
        'maroon-deep': '0 20px 50px rgba(28, 6, 9, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)', transform: 'scale(1)' },
          '50%': { boxShadow: '0 0 35px rgba(212, 175, 55, 0.7)', transform: 'scale(1.02)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
