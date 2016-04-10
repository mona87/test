module.exports = {
    entry: "./public/components/app.js",
    output: {
        path: './public/scripts/',
        filename: "bundle.js"
    },
    module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};