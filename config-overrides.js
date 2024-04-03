const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@UI': 'src/components/UI',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
    '@hoc': 'src/hoc',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@routes': 'src/routes',
    '@static': 'src/static',
    '@hooks': 'src/hooks',
  })(config)

  return config
}