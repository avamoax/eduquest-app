/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        accent: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
        success: '#10B981',
        premium: '#8B5CF6',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          card: '#FFFFFF',
        },
        text: {
          muted: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(99, 102, 241, 0.08), 0 6px 10px rgba(15, 23, 42, 0.05)',
        soft: '0 8px 24px rgba(0, 0, 0, 0.06)',
        focus: '0 0 0 3px rgba(99, 102, 241, 0.35)',
      },
      borderRadius: {
        lg: '14px',
        xl: '18px',
      },
    },
  },
  plugins: [],
}

