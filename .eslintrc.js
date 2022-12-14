module.exports = {
  env: {
    amd: true,
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'typescript-sort-keys',
    'unused-imports',
    "sort-keys-fix"
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    indent: 'off',
    'no-nested-ternary': 'off',
    'no-unused-vars': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    "react/sort-prop-types": 'error',
    "sort-keys-fix/sort-keys-fix": "warn",
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
}
