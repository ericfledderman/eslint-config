module.exports = {
  'extends': [
    // Aimed at promoting clean code and avoiding accidents
    './rules/best-practices',

    // Points out potential runtime error in your code
    './rules/errors',

    // Specifc to ECMAScript 6 development
    './rules/es6',

    // Pertaining to Node.js
    './rules/node',

    // Running code in strict-mode
    './rules/strict-mode',

    // Promote a consistent code style accorss your project
    './rules/style',

    // Declaration and use of variables
    './rules/variables'
  ].map(require.resolve)
}
