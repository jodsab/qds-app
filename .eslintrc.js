module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Personaliza las reglas según tus preferencias
    'prettier/prettier': ['error', {singleQuote: true, trailingComma: 'all'}],
    'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
    'react/jsx-props-no-spreading': 'off',
    // Agrega o modifica las reglas según tus necesidades
  },
};
