var webpack = require("webpack");
module.exports = {
  entry: "./index.sibilant",
  output: {
    path: "build",
    filename: "[name].bundle.js",
    sourceMapFilename: "[file].map"
  },
  devtool: "source-map",
  plugins: [ (new webpack.optimize.UglifyJsPlugin()) ],
  module: { loaders: [ {
    test: (new RegExp("\\.sibilant$", undefined)),
    loader: "sibilant"
  } ] }
};