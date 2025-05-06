import { configs } from '@sequencemedia/eslint-config-standard';
// import prettierPlugin from 'eslint-plugin-prettier';
//import prettierOptions from './prettier.config.mjs';
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
    'prefer-arrow-functions': preferArrowFunctionsPlugin
    // prettier: prettierPlugin
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
      'warn', // or 'error' to make it an error
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    indent: ['error', 2, { MemberExpression: 'off' }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never']
    //'prettier/prettier': ['error', prettierOptions]
  }
};

export default eslintConfig;
