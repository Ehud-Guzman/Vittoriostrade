/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom colors matching tailwind.config.js for consistency
      colors: {
        deepGreen: '#14532D',
        goldenWheat: '#D4AF37',
        warmBrown: '#8B5E34',
        neutralSand: '#F5F0E1',
        charcoalBlack: '#121212',
      },
      // Typography extensions for consistent headings and text
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.2' }],
        'heading-2': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        'heading-3': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2' }],
        base: ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.6' }],
      },
      // Spacing for consistent padding and margins
      spacing: {
        section: '5rem',
        card: '2rem',
        gap: '1.5rem',
      },
      // Border radius for cards and buttons
      borderRadius: {
        card: '1rem',
        button: '9999px',
      },
    },
  },
  // Enable backdrop-filter utilities
  corePlugins: {
    backdropFilter: true,
  },
  // Add responsive and hover variants for backdrop-filter
  variants: {
    extend: {
      backdropFilter: ['responsive', 'hover'],
    },
  },
  plugins: [],
};