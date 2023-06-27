module.exports = {
  root: true,
  extends: '@react-native',
  parser: 'babel-eslint',
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}, {usePrettierrc: true}],
  },
};
