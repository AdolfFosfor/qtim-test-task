module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    "no-console": "off",
    "vue/multi-word-component-names": "off",
    '@typescript-eslint/no-var-requires': 0,
    "quotes": [2, "single", { "avoidEscape": true }]
  },
}
