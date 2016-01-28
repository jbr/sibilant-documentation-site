var webpack = require("webpack");
module.exports.entry = {
  index: "./index.sibilant",
  worker: "./worker.sibilant"
};
module.exports.output = {
  path: "build",
  filename: "[name].bundle.js",
  chunkFilename: "[id].[hash].bundle.js",
  sourceMapFilename: "[file].map"
};
module.exports.devtool = "eval";
module.exports.module = { loaders: [ {
  test: (new RegExp("\\.json$", undefined)),
  loader: "json"
}, {
  test: (new RegExp("\\.sibilant$", undefined)),
  loader: "sibilant"
} ] };
(function() {
  if ("production" === process.env.NODE_ENV) {
    module.exports.devtool = "source-map";
    return module.exports.plugins = [ (new webpack.optimize.UglifyJsPlugin()), (new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })) ];
  }
}).call(this);