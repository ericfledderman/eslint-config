module.exports = {
  parserOptions : {
    ecmaVersion : 2021,
    ecmaFeatures : {
      jsx : true
    },
    sourceType : 'module'
  },

  env : {
    es2021 : true,
    node   : true
  },

  plugins : [
    'import',
    'node',
    'promise'
  ],

  globals : {
    document  : 'readonly',
    navigator : 'readonly',
    window    : 'readonly'
  },

  extends : [
    'eslint:recommended',
    'plugin:node/recommended',

    // Aimed at promoting clean code and avoiding accidents
    './rules/best-practices',

    // Points out potential runtime errors in your code
    './rules/errors',

    // Specifc to ECMAScript 6 development
    './rules/es6',

    // Running code in strict-mode
    './rules/strict-mode',

    // Promote a consistent code style across your project
    './rules/style',

    // Declaration and use of variables
    './rules/variables'
  ].map(require.resolve)
}
