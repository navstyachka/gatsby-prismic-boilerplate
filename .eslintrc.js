module.exports = {
  extends: ["hyam"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  plugins: ["cypress", "react-hooks"],
  env: {
    "cypress/globals": true,
  },
}
