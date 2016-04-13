var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: './public/index.js',
    output: {
        path: './public/',
        filename: "bundle.js"
    },
    module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(js|png|jpg|otf|eot|woff|tff|eot\?-9heso|woff\?-9heso|ttf\?-9heso)$/, loader: "url-loader" },
      { test: /\.svg/, loader: 'svg-url-loader'}
    ],
    plugins: [ 
      new webpack.ProvidePlugin({ 
      $: "jquery",
      numeral:'numeral',

    }),
      new webpack.HotModuleReplacementPlugin()
    ]
  },
};