module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hf-light': '#e6e6e6',
        'hf-light-2': '#dcdcdc',
        tertiary: '#363636',
      },
      spacing: {
        'hf-side-padding': '20px',
        'hf-side-padding-extra-small': '5px',
        'hf-side-padding-small': '10px',
        wrapperPaddings: '10px',
        semi_super_tight: 'var(--spacing-super-tight)',
        semi_extra_tight: 'var(--spacing-extra-tight)',
        semi_tight: 'var(--spacing-tight)',
        semi_base_tight: 'var(--spacing-base-tight)',
        semi_base: 'var(--spacing-base)',
        semi_base_loose: 'var(--spacing-base-loose)',
        semi_loose: 'var(--spacing-loose)',
        semi_extra_loose: 'var(--spacing-extra-loose)',
      },
      fontFamily: {
        urbanist: 'Urbanist',
      },
      borderRadius: {
        'hf-extra-small': '4px',
        'hf-small': '8px',
        semi_default: 'var(--semi-border-default)',
        semi_extra_small: 'var(--semi-border-extra-small)',
        semi_small: 'var(--semi-border-radius-small)',
        semi_medium: 'var(--semi-border-radius-medium)',
        semi_large: 'var(--semi-border-radius-large)',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {
    extend: {
      'dv-large': [''],
    },
  },
  plugins: [],
}
