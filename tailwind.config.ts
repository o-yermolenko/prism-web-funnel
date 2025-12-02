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
        // PRISM color system (Conversion-Optimized)
        prism: {
          black: '#050508',
          deep: '#0a0a0f',
          surface: '#12121a',
          white: '#ffffff',
          'electric-blue': '#0088ff',
          cyan: '#00d4ff',
          muted: '#6b6b7b',
          'muted-light': '#9090a0',
          // Conversion accent colors
          success: '#00e676',
          warning: '#ff9100',
          urgency: '#ff3d71',
          // Dispersion colors - for subtle rainbow effects
          red: '#ff0040',
          orange: '#ff6b00',
          yellow: '#ffd000',
          green: '#00ff88',
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
        // PRISM glow effects (enhanced)
        'prism': '0 0 40px rgba(0, 136, 255, 0.2)',
        'prism-strong': '0 0 60px rgba(0, 136, 255, 0.35)',
        'prism-glow': '0 4px 24px rgba(0, 136, 255, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 136, 255, 0.15)',
      },
      backgroundImage: {
        // Gradient backgrounds
        'gradient-radial': 'radial-gradient(ellipse at 50% 0%, var(--tw-gradient-stops))',
        'gradient-cta': 'linear-gradient(135deg, #0088ff 0%, #00d4ff 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(18, 18, 26, 1) 0%, rgba(10, 10, 15, 1) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
