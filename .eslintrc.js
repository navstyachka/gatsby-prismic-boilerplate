module.exports = {
  extends: ['hyam'],
  settings: {
    'import/resolver': { node: { paths: ['src'] } },
  },
  rules: {
    'react/jsx-props-no-spreading': [2, { html: 'enforce', custom: 'ignore' }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/prop-types': 1,
    'react/forbid-prop-types': 1,
    'no-underscore-dangle': 1,
  },
  plugins: ['cypress', 'react-hooks'],
  env: {
    'cypress/globals': true,
  },
}
