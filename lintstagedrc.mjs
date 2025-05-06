export default {
  // Specify multiple folders to lint
  'scripts/**/*.js': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  'functions/**/*.js': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  'src/**/*.js': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  '**/*.mjs': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  'src/**/*.scss': (filenames) => `stylelint --fix ${filenames.join(' ')}`
};
