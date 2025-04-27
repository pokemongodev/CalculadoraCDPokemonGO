// stylelint.config.mjs
export default {
  ignoreFiles: [
    '.prettierignore',
    '**/*.mjs',
    'node_modules',
    '**/*.js',
    '**/*.html',
    '**/*.json',
    '**/*.svg',
    '**/*.md'
  ],
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-no-indistinguishable-colors',
    'stylelint-group-selectors',
    'stylelint-value-no-unknown-custom-properties',
    'stylelint-order',
    'stylelint-rem-over-px',
    'stylelint-use-nesting'
  ],
  rules: {
    'csstools/value-no-unknown-custom-properties': true,
    'plugin/stylelint-no-indistinguishable-colors': true,
    'color-no-invalid-hex': true,
    'at-rule-no-unknown': true,
    'csstools/use-nesting': 'always',
    'order/properties-alphabetical-order': true, // asegura que las propiedades estén en orden alfabético
    'plugin/stylelint-group-selectors': true
  }
};
