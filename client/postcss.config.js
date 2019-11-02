const custommedia = require('postcss-custom-media');
// const pxtorem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    custommedia({
      extensions: {
        '--phone': '(max-width: 770px) , (max-height: 480px)',
        '--desktop': '(min-width: 770px) AND (min-height: 480px)',
      },
    }),
    require('postcss-color-hex-alpha'),
    require('postcss-aspect-ratio'),
    require('postcss-import'),
    require('postcss-icss-values'),
    require('postcss-responsive-type'),
    require('postcss-fontsize'),
    // pxtorem({
    //     rootValue: 16,
    //     unitPrecision: 5,
    //     propList: ['*', '!transform'],
    //     selectorBlackList: ['svg', 'no_rem' ],
    //     replace: true,
    //     mediaQuery: false,
    //     minPixelValue: 0
    // }),
    require('postcss-calc'),
  ],
};
