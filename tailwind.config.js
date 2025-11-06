/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#A259FF',
        'primary-black': '#2B2B2B',
        'secondary-black': '#3B3B3B',
      },
      fontFamily: {
        sans: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: [
          'Space Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        flip: 'flip 6s ease-in-out infinite',
        'image-zoom': 'image-zoom 6s ease-in-out infinite',
      },
      keyframes: {
        flip: {
          '0%, 100%': {
            transform: 'perspective(1000px) rotateY(-25deg) scale(0.95)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateY(25deg) scale(0.95)',
          },
        },
        'image-zoom': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '25%': {
            transform: 'scale(1.15)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '75%': {
            transform: 'scale(1.15)',
          },
        },
      },
    },
  },
  plugins: [],
};
