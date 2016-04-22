var webpack = require("webpack");
module.exports.entry = {
  index: "./index.sibilant",
  worker: "./worker.sibilant"
};
module.exports.output = {
  path: (__dirname + "/build"),
  filename: "[name].bundle.js",
  chunkFilename: "[id].bundle.js",
  sourceMapFilename: "[file].map"
};
module.exports.devtool = "#cheap-module-eval-source-map";
module.exports.module = { loaders: [ {
  test: (new RegExp("\\.json$", undefined)),
  loader: "json"
}, {
  test: (new RegExp("\\.sibilant$", undefined)),
  loader: "sibilant"
} ] };
(function() {
  if ("production" === process.env.NODE_ENV) {
    module.exports.devtool = "#source-map";
    return module.exports.plugins = [ (new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        keep_fnames: true
      },
      mangle: false
    })), (new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })) ];
  }
}).call(this);