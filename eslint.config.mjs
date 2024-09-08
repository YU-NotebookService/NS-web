module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Prettier와 통합
  ],
  plugins: ['react'],
  rules: {
    // 필요에 따라 규칙을 추가하거나 수정
  },
  settings: {
    react: {
      version: 'detect', // 자동으로 React 버전 감지
    },
  },
};