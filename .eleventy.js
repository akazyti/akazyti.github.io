const yaml = require('js-yaml')

module.exports = function (config) {
  config.addWatchTarget('src')
  config.addPassthroughCopy('src/static')
  config.addPassthroughCopy('src/robots.txt')
  config.addPassthroughCopy('src/favicon.ico')
  config.addDataExtension('yaml', (contents) => yaml.load(contents))

  return {
    dir: {
      input: 'src',
      output: 'docs',
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
  }
}
