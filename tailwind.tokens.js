/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        ink: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        line: 'var(--color-border)',
        accent: 'var(--color-accent)',
        highlight: 'var(--color-highlight)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        info: 'var(--color-info)'
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)']
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        hero: 'var(--text-hero)'
      },
      spacing: {
        1: 'var(--space-1)', 2: 'var(--space-2)', 3: 'var(--space-3)', 4: 'var(--space-4)', 5: 'var(--space-5)',
        6: 'var(--space-6)', 7: 'var(--space-7)', 8: 'var(--space-8)', 9: 'var(--space-9)', 10: 'var(--space-10)'
      },
      borderRadius: {
        sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', pill: 'var(--radius-pill)'
      },
      transitionDuration: { fast: '140ms', base: '240ms', slow: '560ms' },
      transitionTimingFunction: { standard: 'var(--ease-standard)' }
    }
  }
};
