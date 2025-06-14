export default {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^@(.*)$', '^~/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,css,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
