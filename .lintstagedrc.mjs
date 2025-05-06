export default {
  // Specify multiple folders to lint
  'src/**/*.js': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  '**/*.mjs': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  'src/**/*.css': (filenames) => `stylelint --fix ${filenames.join(' ')}`
};
