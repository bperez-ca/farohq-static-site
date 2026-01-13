/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
        },
        grape: {
          DEFAULT: '#4B48ED',
          dark: '#4338CA',
        },
        'hq-accent': {
          DEFAULT: '#7C27C2',
        },
        teal: {
          DEFAULT: '#00D9FF',
        },
        green: {
          DEFAULT: '#10B981',
        },
        orange: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        'text-dark': '#111827',
        'text-light': '#F9FAFB',
        'border-light': '#E5E7EB',
        'border-dark': '#1F2937',
        'surface-light': '#F9FAFB',
        'surface-dark': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.08)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
