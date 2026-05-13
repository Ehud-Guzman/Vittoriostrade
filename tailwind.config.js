/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vittorios brand palette — terracotta/sienna earth tones
        brand: {
          50:  '#FDF6F0',
          100: '#FAE8D8',
          200: '#F4CDAC',
          300: '#ECAD7A',
          400: '#E08A4A',
          500: '#C4622D',
          600: '#A34E22',
          700: '#833D19',
          800: '#622D12',
          900: '#42200D',
        },
        // Clean neutral scale
        earth: {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        cream: '#FFFFFF',
        grain: '#C4622D',
        // Legacy aliases kept for backward compatibility
        deepGreen:     '#14532D',
        goldenWheat:   '#C4622D',
        warmBrown:     '#A34E22',
        neutralSand:   '#F5F0E1',
        charcoalBlack: '#121212',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm':    '0 4px 24px rgba(0, 0, 0, 0.07)',
        'warm-lg': '0 8px 40px rgba(0, 0, 0, 0.11)',
        'brand':   '0 4px 24px rgba(196, 98, 45, 0.18)',
      },
      spacing: {
        section: '5rem',
        card:    '2rem',
      },
      borderRadius: {
        card:   '1rem',
        button: '9999px',
      },
    },
  },
  plugins: [],
};
