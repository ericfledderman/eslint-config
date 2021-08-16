// 0 = off
// 1 = warn
// 3 = error

module.exports = {
  parserOptions : {
    ecmaVersion : 6
  },

  env : {
    es6 : true
  },

  rules : {
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style' : [ 'error', 'as-needed' ],

    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens' : [ 'error', 'as-needed' ],

    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/constructor-super
    'constructor-super' : 'error',

    // http://eslint.org/docs/rules/generator-star-spacing
    // 'generator-star-spacing' : 0,

    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign' : 'error',

    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow' : 'error',

    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign' : 'error',

    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members' : 'error',

    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports' : 'error',

    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol' : 'error',

    // http://eslint.org/docs/rules/no-restricted-imports
    // 'no-restricted-imports' : 0,

    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super' : 'error',

    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key' : 'error',

    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor' : 'error',

    // http://eslint.org/docs/rules/no-var
    'no-var' : 'error',

    // http://eslint.org/docs/rules/object-shorthand
    // 'object-shorthand' : 0,

    // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback' : 'error',

    // http://eslint.org/docs/rules/prefer-const
    'prefer-const' : 'error',

    // http://eslint.org/docs/rules/prefer-reflect
    // 'prefer-reflect' : 0,

    // Deprecated in ESLint v3.9.0
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params' : 'error',

    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread' : 'error',

    // http://eslint.org/docs/rules/prefer-template
    'prefer-template' : 'error',

    // http://eslint.org/docs/rules/require-yield
    // 'require-yield' : 0,

    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/yield-star-spacing
    // 'yield-star-spacing' : 0
  }
}
