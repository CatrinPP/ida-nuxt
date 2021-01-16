module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    'declaration-no-important': true,
    indentation: [2, { ignore: ['inside-parens'] }],
    'at-rule-no-unknown': null
  }
}
