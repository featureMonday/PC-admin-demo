module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'prettier',
    'eslint:recommended',
    'eslint-config-prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'warn',
    "no-useless-escape": 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
