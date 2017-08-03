// Currently, vue-loader only supports postcss.config.js in the project root
console.log('????????')
module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-import': {  },
    // 'postcss-mixins': { mixins: require('./src/css/global/mixins') },
    // 'postcss-icss-values': {},
    // 'postcss-icss-import': {},
    // 'postcss-cssnext': {},
    // 'cssnano': env === 'production' ? {} : false
  }
});