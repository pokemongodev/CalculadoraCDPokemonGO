const lintStaged = {
  // Specify multiple folders to lint
  'src/**/*': (filenames) => `prettier --write ${filenames.join(' ')}`,
  'src/**/*.js': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  '**/*.mjs': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  'src/**/*.css': (filenames) => `stylelint --fix ${filenames.join(' ')}`
};
export { lintStaged };
