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
        // PRISM color system - THE VOID
        prism: {
          // The Void - True black
          black: '#000000',
          surface: '#050508',
          elevated: '#0a0a0f',
          border: '#1a1a1f',
          // The Light
          white: '#ffffff',
          secondary: '#888888',
          muted: '#666666',
          // The Refraction - Use sparingly
          'electric-blue': '#0066ff',
          cyan: '#00d4ff',
          // Success state only
          success: '#00e676',
        },
      },
      fontFamily: {
        // Raw input - monospace for unfiltered thoughts
        raw: ['var(--font-mono)', 'ui-monospace', 'SF Mono', 'Consolas', 'monospace'],
        // Refined output - clean sans-serif for processed insights
        refined: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // PRISM spacing system - generous, intentional
        void: '8rem',
        breath: '4rem',
        pause: '2rem',
        gap: '1rem',
      },
      borderRadius: {
        // PRISM is SHARP - max 4px
        'none': '0',
        'sharp': '2px',
        'sm': '2px',
        'DEFAULT': '2px',
        'md': '4px',
        'lg': '4px',
        'xl': '4px',
        '2xl': '4px',
        '3xl': '4px',
        'full': '9999px', // Keep for actual circles
      },
      animation: {
        // PRISM animation system - slow and deliberate
        'fade-in': 'prism-fade-in 300ms cubic-bezier(0.0, 0, 0.2, 1) forwards',
        'fade-out': 'prism-fade-out 300ms cubic-bezier(0.0, 0, 0.2, 1) forwards',
        'slide-up': 'prism-slide-up 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-slow': 'prism-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        wave: 'prism-wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
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
        'raw': '0',
        'badge': '0.1em',
      },
      lineHeight: {
        // PRISM line heights
        'refined': '1.5',
        'raw': '1.6',
        'display': '1.1',
      },
      boxShadow: {
        // PRISM glow effects - subtle, not soft
        'prism': '0 0 24px rgba(0, 102, 255, 0.15)',
        'prism-strong': '0 0 40px rgba(0, 102, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
