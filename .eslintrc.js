module.exports = {
  extends: ['hyam'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/forbid-prop-types': [0, { properties: 'never' }],
    camelcase: [0, { properties: 'never' }],
    'no-underscore-dangle': [0, { properties: 'never' }],
  },
  plugins: ['cypress', 'react-hooks'],
  env: {
    'cypress/globals': true,
  },
}
