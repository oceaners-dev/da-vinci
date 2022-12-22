const plugin = require('tailwindcss/plugin')
const spacing = require('tailwindcss/defaultTheme').spacing

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dv-primary-base': 'var(--da-vinci-colors-primary-base)',
        'dv-primary-hover': 'var(--da-vinci-colors-primary-hover)',
        'dv-primary-active': 'var(--da-vinci-colors-primary-active)',
        'dv-primary-disabled': 'var(--da-vinci-colors-primary-disabled)',
        'dv-secondary-base': 'var(--da-vinci-colors-secondary-base)',
        'dv-secondary-hover': 'var(--da-vinci-colors-secondary-hover)',
        'dv-secondary-active': 'var(--da-vinci-colors-secondary-active)',
        'dv-secondary-disabled': 'var(--da-vinci-colors-secondary-disabled)',
        'dv-warning-base': 'var(--da-vinci-colors-warning-base)',
        'dv-warning-hover': 'var(--da-vinci-colors-warning-hover)',
        'dv-warning-active': 'var(--da-vinci-colors-warning-active)',
        'dv-danger-base': 'var(--da-vinci-colors-danger-base)',
        'dv-danger-hover': 'var(--da-vinci-colors-danger-hover)',
        'dv-danger-active': 'var(--da-vinci-colors-danger-active)',
        'dv-tertiary-base': 'var(--da-vinci-colors-tertiary-base)',
        'dv-tertiary-hover': 'var(--da-vinci-colors-tertiary-hover)',
        'dv-tertiary-active': 'var(--da-vinci-colors-tertiary-active)',
        'dv-positive-base': 'var(--da-vinci-colors-positive-base)',
        'dv-positive-hover': 'var(--da-vinci-colors-positive-hover)',
        'dv-positive-active': 'var(--da-vinci-colors-positive-active)',
        'dv-positive-disabled': 'var(--da-vinci-colors-positive-disabled)',
        'dv-negative-base': 'var(--da-vinci-colors-negative-base)',
        'dv-negative-hover': 'var(--da-vinci-colors-negative-hover)',
        'dv-negative-active': 'var(--da-vinci-colors-negative-active)',
        'dv-shadow-base': 'var(--da-vinci-colors-shadow-base)',
        'dv-border-base': 'var(--da-vinci-colors-border-base)',
      },
      borderRadius: {
        'dv-large': 'var(--da-vinci-radius-large)',
        'dv-small': 'var(--da-vinci-radius-small)',
        'dv-full': 'var(--da-vinci-radius-full)',
        'dv-medium': 'var(--da-vinci-radius-medium)',
        'dv-xs': 'var(--da-vinci-radius-xs)',
      },
      boxShadow: {
        'dv-none': 'var(--da-vinci-shadow-none)',
        'dv-sm': 'var(--da-vinci-shadow-sm)',
        'dv-md': 'var(--da-vinci-shadow-md)',
        'dv-lg': 'var(--da-vinci-shadow-lg)',
      },
      spacing: {
        'dv-none': 'var(--da-vinci-spacing-none)',
        'dv-superTight': 'var(--da-vinci-spacing-superTight)',
        'dv-extraTight': 'var(--da-vinci-spacing-extraTight)',
        'dv-tight': 'var(--da-vinci-spacing-tight)',
        'dv-baseTight': 'var(--da-vinci-spacing-baseTight)',
        'dv-base': 'var(--da-vinci-spacing-base)',
        'dv-baseLoose': 'var(--da-vinci-spacing-baseLoose)',
        'dv-loose': 'var(--da-vinci-spacing-loose)',
        'dv-extraLoose': 'var(--da-vinci-spacing-extraLoose)',
        'dv-superLoose': 'var(--da-vinci-spacing-superLoose)',
      },
      fontSize: {
        'dv-h1': 'var(--da-vinci-typography-h1)',
        'dv-h2': 'var(--da-vinci-typography-h2)',
        'dv-h3': 'var(--da-vinci-typography-h3)',
        'dv-h4': 'var(--da-vinci-typography-h4)',
        'dv-h5': 'var(--da-vinci-typography-h5)',
        'dv-h6': 'var(--da-vinci-typography-h6)',
        'dv-regular': 'var(--da-vinci-typography-regular)',
        'dv-small': 'var(--da-vinci-typography-small)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.input-classes': {
          paddingRight: theme('spacing.dv-small'),
          paddingLeft: theme('spacing.dv-small'),
          borderRadius: theme('borderRadius.dv-extraTight'),
          boxSizing: 'border-box',
          width: 'fit-content',
          lineHeight: '1',
          boxShadow: theme('boxShadow.xl'),
          backgroundColor: theme('colors.gray.200'),
          '&:hover': {
            backgroundColor: theme('colors.gray.300'),
            '&:focus': {
              backgroundColor: theme('colors.gray.200'),
            },
          },
          '&:active': {
            outlineColor: theme('colors.gray.300'),
          },
          '&:focus': {
            outlineColor: theme('colors.gray.300'),
          },
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: theme('colors.dv-border-base'),
        },
        '.card-classes': {
          padding: theme('spacing.dv-baseLoose'),
          height: 'fit-content',
          borderRadius: theme('borderRadius.dv-small'),
          boxSizing: 'border-box',
          width: '--webkit-fill-available',
          backgroundColor: 'white',
          // boxShadow: theme('boxShadow.md'),
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: theme('colors.dv-border-base'),
        },
        '.button-classes': {
          borderRadius: theme('borderRadius.dv-extraTight'),
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: theme('colors.dv-secondary-disabled'),
          backgroundColor: theme('colors.gray.100'),
        },
        '.border-classes': {
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: theme('colors.dv-secondary-disabled'),
        },
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
}
