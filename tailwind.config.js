const plugin = require('tailwindcss/plugin');
const spacing = require('tailwindcss/defaultTheme').spacing;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
    './examples/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hf-light': '#e6e6e6',
        'hf-light-2': '#dcdcdc',
        tertiary: '#363636',
        // /
        // /
        // /
        fersat: 'var(--semi-color-semi_tertiary-hover)',
        primary: 'var(--semi-color-primary)',
        semi_primary: 'var(--semi-color-primary)',
        semi_primary_hover: 'var(--semi-color-primary-hover)',
        semi_primary_active: 'var(--semi-color-primary-active)',
        semi_primary_disabled: 'var(--semi-color-primary-disabled)',
        semi_primary_light_default: 'var(--semi-color-primary-light-default)',
        semi_primary_light_hover: 'var(--semi-color-primary-light-hover)',
        semi_primary_light_active: 'var(--semi-color-primary-light-active)',
        semi_secondary: 'var(--semi-color-secondary)',
        semi_secondary_hover: 'var(--semi-color-secondary-hover)',
        semi_secondary_active: '#004FB3',
        semi_secondary_disabled: '#98CDFD',
        semi_secondary_light_default: '#EAF5FF',
        semi_secondary_light_hover: '#CBE7FE',
        semi_secondary_light_active: '#98CDFD',
        semi_bg: 'var(--semi-color-bg-0)',
        semi_bg_1: 'var(--semi-color-bg-1)',
        semi_bg_2: 'var(--semi-color-bg-2)',
        semi_bg_3: 'var(--semi-color-bg-3)',
        semi_bg_4: 'var(--semi-color-bg-4)',
        semi_bg_overlay: 'var(--semi-color-overlay-bg)',
        semi_border: 'var(--semi-color-border)',
        semi_border_1: 'var(--semi-color-border-1)',
        semi_border_2: 'var(--semi-color-border-2)',
        semi_border_3: 'var(--semi-color-border-3)',
        semi_tertiary: 'var(--semi-color-tertiary)',
        semi_tertiary_hover: 'var(--semi-color-tertiary-hover)',
        semi_tertiary_active: 'var(--semi-color-tertiary-active)',
        semi_tertiary_light_default: 'var(--semi-color-tertiary-light-default)',
        semi_tertiary_light_hover: 'var(--semi-color-tertiary-light-hover)',
        semi_tertiary_light_active: 'var(--semi-color-tertiary-light-active)',
        semi_info: 'var(--semi-color-info)',
        semi_info_hover: 'var(--semi-color-info-hover)',
        semi_info_active: 'var(--semi-color-info-active)',
        semi_info_disabled: 'var(--semi-color-info-disabled)',
        semi_info_light_default: 'var(--semi-color-info-light-default)',
        semi_info_light_hover: 'var(--semi-color-info-light-hover)',
        semi_info_light_active: 'var(--semi-color-info-light-active)',
        semi_success: 'var(--semi-color-success)',
        semi_success_hover: 'var(--semi-color-success-hover)',
        semi_success_active: 'var(--semi-color-success-active)',
        semi_success_disabled: 'var(--semi-color-success-disabled)',
        semi_success_light_default: 'var(--semi-color-success-light-default)',
        semi_success_light_hover: 'var(--semi-color-success-light-hover)',
        semi_success_light_active: 'var(--semi-color-success-light-active)',
        semi_warning: 'var(--semi-color-warning)',
        semi_warning_hover: 'var(--semi-color-warning-hover)',
        semi_warning_active: 'var(--semi-color-warning-active)',
        semi_warning_disabled: 'var(--semi-color-warning-disabled)',
        semi_warning_light_default: 'var(--semi-color-warning-light-default)',
        semi_warning_light_hover: 'var(--semi-color-warning-light-hover)',
        semi_danger: 'var(--semi-color-danger)',
        semi_danger_hover: 'var(--semi-color-danger-hover)',
        semi_danger_active: 'var(--semi-color-danger-active)',
        semi_danger_disabled: 'var(--semi-color-danger-disabled)',
        semi_danger_light_default: 'var(--semi-color-danger-light-default)',
        semi_danger_light_hover: 'var(--semi-color-danger-light-hover)',
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
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        'slide-bottom': {
          '0%': { transform: 'translateY(-100)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-top': 'slide-top 0.5s both',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.input-classes': {
          paddingRight: theme('spacing.hf-side-padding-small'),
          paddingLeft: theme('spacing.hf-side-padding-small'),
          borderRadius: theme('borderRadius.hf-extra-small'),
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
          outlineColor: theme('colors.hf-light'),
        },
        '.card-classes': {
          padding: theme('spacing.hf-side-padding'),
          height: 'fit-content',
          borderRadius: theme('borderRadius.hf-small'),
          boxSizing: 'border-box',
          width: '--webkit-fill-available',
          backgroundColor: 'white',
          // boxShadow: theme('boxShadow.md'),
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: theme('colors.hf-light'),
        },
        '.button-classes': {
          borderRadius: theme('borderRadius.hf-extra-small'),
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: theme('colors.hf-light'),
          backgroundColor: theme('colors.gray.100'),
        },
        '.border-classes': {
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineColor: theme('colors.hf-light'),
        },
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
