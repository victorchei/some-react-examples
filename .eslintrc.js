module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        semi: false,
      },
    ],

    'no-unused-vars': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'never'],
    'no-redeclare': 0,
    'react/function-component-definition': 0,
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
  },
}
