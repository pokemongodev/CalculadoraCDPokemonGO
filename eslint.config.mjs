import { configs } from '@sequencemedia/eslint-config-standard';
// import prettierPlugin from 'eslint-plugin-prettier';
// import prettierConfig from './prettier.config.mjs';
import preferArrowFunctionsPlugin from 'eslint-plugin-prefer-arrow-functions';

const eslintConfig = {
  ...configs.recommended,
  ignores: ['node_modules/**'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      window: 'readonly',
      document: 'readonly',
      process: 'readonly',
      console: 'readonly',
      module: 'readonly',
      require: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  plugins: {
    // prettier: prettierPlugin,
    'prefer-arrow-functions': preferArrowFunctionsPlugin
  },
  rules: {
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        allowedNames: [],
        allowNamedFunctions: false,
        allowObjectProperties: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    //'prettier/prettier': ['error', prettierConfig],
    indent: ['error', 2, { MemberExpression: 'off' }],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always']
  }
};

export default eslintConfig;
