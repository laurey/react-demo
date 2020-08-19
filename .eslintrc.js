module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:compat/recommended'
    // 'plugin:react/recommended',
  ],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  // plugins: ['react'],
  rules: {
    indent: [1, 2],
    quotes: [2, 'single'],
    'comma-dangle': [2, 'never'],
    'linebreak-style': [2, 'unix'],
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'global-require': [1],
    'object-curly-newline': [0],
    'function-paren-newline': [0],
    'arrow-body-style': [0],
    'require-yield': 1,
    'no-bitwise': [0],
    'no-plusplus': [0],
    'no-unused-vars': 0,
    'no-else-return': [0],
    'no-cond-assign': [0],
    'no-param-reassign': [0],
    'no-nested-ternary': [0],
    'no-restricted-globals': [0],
    'no-restricted-syntax': [0],
    'no-use-before-define': [0],
    'react/jsx-no-bind': [0],
    'react/prop-types': [0],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-wrap-multilines': [0],
    'import/no-extraneous-dependencies': [0],
    'import/prefer-default-export': [0],
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [0]
  }
};