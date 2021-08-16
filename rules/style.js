// 0 = off
// 1 = warn
// 3 = error

module.exports = {
  rules : {
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/block-spacing
    // 'block-spacing' : 0,

    // http://eslint.org/docs/rules/brace-style
    // 'brace-style' : 0,

    // http://eslint.org/docs/rules/camelcase
    // 'camelcase' : 0,

    // http://eslint.org/docs/rules/comma-spacing
    // 'comma-spacing' : 0,

    // http://eslint.org/docs/rules/comma-style
    // 'comma-style' : 0,

    // http://eslint.org/docs/rules/computed-property-spacing
    // 'computed-property-spacing' : 0,

    // http://eslint.org/docs/rules/consistent-this
    // 'consistent-this' : 0,

    // http://eslint.org/docs/rules/eol-last
    'eol-last' : [ 'error', 'always '],

    // http://eslint.org/docs/rules/func-names
    // 'func-names' : 0,

    // http://eslint.org/docs/rules/func-style
    'func-style' : [ 'error', 'expression' ],

    // http://eslint.org/docs/rules/id-blacklist
    // 'id-blacklist' : 0,

    // http://eslint.org/docs/rules/id-length
    'id-length' : 'error',

    // http://eslint.org/docs/rules/id-match
    // 'id-match' : 0,

    // http://eslint.org/docs/rules/indent
    'indent' : [ 'error', 2 ],

    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes' : [ 'error', 'prefer-single' ],

    // http://eslint.org/docs/rules/key-spacing
    'key-spacing' : [ 'error', { afterColon : true, beforeColon : true } ],

    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing' : [ 'error', { after : true, before : true} ],

    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style' : [ 'error', 'unix' ],

    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment' : [ 'error', {
      afterBlockComment  : false,
      afterLineComment   : false,
      allowArrayEnd      : false,
      allowArrayStart    : false,
      allowBlockEnd      : false,
      allowBlockStart    : true,
      allowClassEnd      : false,
      allowClassStart    : true,
      allowObjectEnd     : false,
      allowObjectStart   : true,
      beforeBlockComment : true,
      beforeLineComment  : true,
    } ],

    // http://eslint.org/docs/rules/max-depth
    'max-depth' : [ 'error', 4 ],

    // http://eslint.org/docs/rules/max-len
    'max-len' : [ 'error', {
      ignoreComments         : true,
      ignoreStrings          : true,
      ignoreTrailingComments : true,
      ignoreUrls             : true,
      code                   : 120
    } ],

    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks' : [ 'error', 10 ],

    // http://eslint.org/docs/rules/max-params
    'max-params' : [ 'error', 4 ],

    // http://eslint.org/docs/rules/max-statements
    'max-statements' : [ 'error', 15 ],

    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line' : [ 'error', 1 ],

    // http://eslint.org/docs/rules/new-cap
    'new-cap' : 'error',

    // http://eslint.org/docs/rules/new-parens
    'new-parens' : [ 'error', 'always' ],

    // Deprecated in ESLint v4.0.0
    // http://eslint.org/docs/rules/newline-after-var
    // 'newline-after-var' : 0,

    // Deprecated is ESLint v4.0.0
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return' : 'error',

    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call' : [ 'error', { ignoreChainWithDepth : 2 } ],

    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor' : 'error',

    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise' : 'error',

    // http://eslint.org/docs/rules/no-continue
    'no-continue' : 'error',

    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments' : 'error',

    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if' : 'error',

    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs' : 'error',

    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines' : [ 'error', { max : 2, maxEOF : 1 } ],

    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition' : 'error',

    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary' : 'error',

    // http://eslint.org/docs/rules/no-new-object
    'no-new-object' : 'error',

    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus' : 0,

    // http://eslint.org/docs/rules/no-restricted-syntax
    // 'no-restricted-syntax' : 0,

    // Deprecated in ESLint v3.3.0
    // http://eslint.org/docs/rules/no-spaced-func
    // 'no-spaced-func' : 0,

    // http://eslint.org/docs/rules/no-ternary
    'no-ternary' : 0,

    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces' : 'error',

    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle' : 'error',

    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary' : 'error',

    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property' : 'error',

    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/one-var
    'one-var' : [ 'error', 'never' ],

    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak' : [ 'error', 'none' ],

    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks' : [ 'error', 'never' ],

    // http://eslint.org/docs/rules/quote-props
    'quote-props' : [ 'error', 'as-needed' ],

    // http://eslint.org/docs/rules/quotes
    'quotes' : [ 'error', 'single', { allowTemplateLiterals : true } ],

    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc' : [ 'error', {
      ArrowFunctionExpression : true,
      ClassDeclaration        : true,
      FunctionDeclaration     : true,
      FunctionExpression      : true,
      MethodDefinition        : true
    } ],

    // http://eslint.org/docs/rules/semi
    'semi' : [ 'error', 'never' ],

    // http://eslint.org/docs/rules/semi-spacing
    // 'semi-spacing' : 0,

    // http://eslint.org/docs/rules/sort-imports
    'sort-imports' : [ 'error', {
      allowSeparatedGroups  : true,
      ignoreCase            : false,
      ignoreDeclarationSort : false,
      ignoreMemberSort      : false,
      memberSyntaxSortOrder : [ 'all', 'single', 'multiple', 'none' ]
    } ],

    // http://eslint.org/docs/rules/sort-vars
    'sort-vars' : 'error',

    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens' : [ 'error', 'never' ],

    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops' : 'error',

    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment' : [ 'error', 'always' ],

    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex' : 0
  }
}
