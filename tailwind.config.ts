import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void:        '#07090F',
        surface:     '#0D1017',
        'surface-2': '#141B26',
        border:      '#1C2438',
        muted:       '#64748B',
        violet:      '#7C3AED',
        indigo:      '#4F46E5',
        sky:         '#38BDF8',
        emerald:     '#10B981',
        text:        '#EEF2FF',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm:   ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':   'linear-gradient(135deg, #7C3AED 0%, #4F46E5 50%, #38BDF8 100%)',
        'gradient-brand-r': 'linear-gradient(135deg, #38BDF8 0%, #4F46E5 50%, #7C3AED 100%)',
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
