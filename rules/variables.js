// 0 = off
// 1 = warn
// 3 = error

module.exports = {
  rules : {
    // http://eslint.org/docs/rules/init-declarations
    'init-declarations' : [ 'error', 'always' ],

    // Deprecated in ESLint v5.1.0
    // http://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow' : 'error',

    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var' : 'error',

    // http://eslint.org/docs/rules/no-label-var
    'no-label-var' : 'error',

    // http://eslint.org/docs/rules/no-restricted-globals
    // 'no-restricted-globals' : 0,

    // http://eslint.org/docs/rules/no-shadow
    'no-shadow' : 'error',

    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names' : 'error',

    // http://eslint.org/docs/rules/no-undef
    'no-undef' : 'error',

    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init' : 'error',

    // http://eslint.org/docs/rules/no-undefined
    'no-undefined' : 'error',

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars' : 'error',

    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define' : 'error'
  }
}
