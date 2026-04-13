/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#F7F5F0',
          100: '#EDE9DF',
          200: '#DDD5C4',
          300: '#C6B898',
          400: '#A9946A',
          500: '#8B7445',
          600: '#725E37',
          700: '#5A4A2C',
          800: '#433722',
          900: '#2E2618',
          950: '#1A150D',
        },
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)',  'system-ui', 'sans-serif'],
        body:    ['var(--font-dm-sans)',  'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia',   'serif'],
        syne:    ['var(--font-syne)',     'system-ui', 'sans-serif'],
      },
      keyframes: {
        'ticker': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'backdrop-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'backdrop-out': { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        'modal-in':     { '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
        'modal-out':    { '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },      '100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' } },
      },
      animation: {
        'ticker':       'ticker 28s linear infinite',
        'backdrop-in':  'backdrop-in 0.3s ease-out',
        'backdrop-out': 'backdrop-out 0.3s ease-in',
        'modal-in':     'modal-in 0.3s ease-out',
        'modal-out':    'modal-out 0.3s ease-in',
      },
    },
  },
  plugins: [],
};
