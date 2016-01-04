var webpack = require("webpack");
module.exports = {
  entry: "./index.sibilant",
  output: {
    path: "build",
    filename: "[name].bundle.js",
    chunkFilename: "[id].[hash].bundle.js",
    sourceMapFilename: "[file].map"
  },
  plugins: [ (new webpack.optimize.UglifyJsPlugin()) ],
  devtool: "source-map",
  module: { loaders: [ {
    test: (new RegExp("\\.json$", undefined)),
    loader: "json"
  }, {
    test: (new RegExp("\\.sibilant$", undefined)),
    loader: "sibilant"
  } ] }
};