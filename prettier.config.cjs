module.exports = {
  semi: false,
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  svelteSortOrder: 'options-scripts-styles-markup',
  plugins: ['prettier-plugin-svelte'],
  pluginSearchDirs: ['.'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
