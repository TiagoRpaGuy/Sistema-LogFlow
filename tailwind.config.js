/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a', // Green 600
          dark: '#15803d',    // Green 700
          light: '#dcfce7',   // Green 100
          neon: '#46ec13',    // Neon Accent
        },
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f8fafc',
          dark: '#0f172a'
        },
        border: '#e2e8f0'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
