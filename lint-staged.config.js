module.exports = {
  '*.{ts,tsx}': [
    'prettier --write',
    'eslint --ext .ts,.tsx.js,.jsx . --fix',
    'git add',
  ],
};
