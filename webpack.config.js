const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./app.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
       },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
