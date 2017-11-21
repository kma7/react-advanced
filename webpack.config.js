const webpack = require("webpack"),
  path = require("path"),
  BUILD_DIR = path.resolve(__dirname + "/build"),
  APP_DIR = path.resolve(__dirname + "/app")

let config = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              "es2015",
              "react"
            ]
          }
        }]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}

module.exports = config
