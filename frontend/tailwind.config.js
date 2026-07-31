/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF3EE',
          100: '#FAE2D6',
          200: '#F3C0A9',
          300: '#EB9777',
          400: '#E16F4C',
          500: '#D24B1E',
          600: '#B43E16',
          700: '#913113',
          800: '#6E2611',
          900: '#4C1D0F',
        },
        cream: {
          50: '#FFFBF3',
          100: '#FCF3E2',
          200: '#F7E6C6',
          300: '#EFD3A1',
          400: '#E5BC77',
          500: '#D9A355',
          600: '#C08638',
          700: '#9A672B',
        },
        terra: {
          50: '#FAF1E8',
          100: '#F3E0CB',
          200: '#E7C39B',
          300: '#D9A566',
          400: '#CD8840',
          500: '#B36B2C',
          600: '#935522',
          700: '#74431F',
        },
        ink: {
          900: '#22160F',
          700: '#4B3B30',
          500: '#7A6A5E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(34, 22, 15, 0.25)',
        card: '0 4px 20px -6px rgba(34, 22, 15, 0.15)',
      },
    },
  },
  plugins: [],
}
