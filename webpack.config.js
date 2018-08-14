module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,
        use: ['babel-loader']
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(png|svg|jp(e*)g|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
