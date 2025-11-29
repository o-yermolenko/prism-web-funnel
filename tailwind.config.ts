import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRISM color system
        prism: {
          black: '#000000',
          white: '#ffffff',
          'electric-blue': '#0066ff',
          muted: '#666666',
          'muted-light': '#888888',
          // Dispersion colors - for subtle rainbow effects
          red: '#ff0040',
          orange: '#ff6b00',
          yellow: '#ffd000',
          green: '#00ff88',
          cyan: '#00d4ff',
          violet: '#8800ff',
        },
      },
      fontFamily: {
        // Main font
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Raw input - monospace for unfiltered thoughts
        raw: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        // Refined output - clean sans-serif for processed insights
        refined: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // PRISM spacing system - generous, intentional
        void: '8rem',
        breath: '4rem',
        pause: '2rem',
        gap: '1rem',
      },
      animation: {
        // PRISM animation system - slow and deliberate
        'fade-in': 'prism-fade-in 300ms cubic-bezier(0.0, 0, 0.2, 1) forwards',
        'fade-out': 'prism-fade-out 300ms cubic-bezier(0.0, 0, 0.2, 1) forwards',
        'slide-up': 'prism-slide-up 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-slow': 'prism-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        wave: 'prism-wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        dispersion: 'prism-dispersion 8s linear infinite',
        blink: 'prism-blink 1s step-end infinite',
      },
      keyframes: {
        'prism-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'prism-fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'prism-slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'prism-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'prism-wave': {
          '0%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.3)' },
        },
        'prism-dispersion': {
          from: { filter: 'hue-rotate(0deg)' },
          to: { filter: 'hue-rotate(360deg)' },
        },
        'prism-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      transitionDuration: {
        // PRISM timing values
        default: '300ms',
        medium: '400ms',
        slow: '500ms',
        pause: '800ms',
      },
      transitionTimingFunction: {
        // PRISM easing curves
        prism: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fade: 'cubic-bezier(0.0, 0, 0.2, 1)',
      },
      letterSpacing: {
        // Refined tracking for PRISM typography
        'refined': '-0.02em',
        'display': '-0.03em',
        'raw': '-0.01em',
      },
      lineHeight: {
        // PRISM line heights
        'refined': '1.5',
        'raw': '1.6',
        'display': '1.1',
      },
      boxShadow: {
        // PRISM glow effects
        'prism': '0 0 40px rgba(0, 102, 255, 0.15)',
        'prism-strong': '0 0 60px rgba(0, 102, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
