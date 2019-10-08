module.exports = {
  env: {
    browser: true,
    node: false,
  },
  extends: ['gowento'],
  globals: {
    // Allow read-only use of the `process` global in the whole project
    process: false,
  },
  rules: {
    // Allow JSX in both `.js` and `.jsx` files
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
