module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  rules: {
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
        ],
        pathGroups: [
          { pattern: 'react+(|-dom)', group: 'builtin', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
      },
    ],
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': 'webpack',
    'import/ignore': ['node_modules'],
  },
};
