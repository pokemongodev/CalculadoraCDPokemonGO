// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    'node_modules/',
    'node_modules/*',
    '**/*.json',
    '.husky/**/*',
    '.husky/pre-commit',
    'all.js'
  ]),
  {
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
    rules: {
      indent: ['error', 2, { MemberExpression: 'off' }],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'never']
    }
  }
]);
