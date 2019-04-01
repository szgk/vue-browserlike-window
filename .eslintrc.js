module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {'browser': true},
  extends: ['vue', 'plugin:vue/recommended'],
  rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-console': ['error', { allow: ['warn', 'error'] }]
  },
}