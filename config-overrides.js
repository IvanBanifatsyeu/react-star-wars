const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@UI': 'src/components/UI',
    '@constants': 'src/constants',
    '@pages': 'src/pages',
    '@hoc': 'src/hoc',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@routes': 'src/routes',
    '@static': 'src/static',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
    '@context': 'src/context',
  })(config)

  return config
}