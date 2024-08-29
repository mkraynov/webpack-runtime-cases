const path = require('path');

module.exports = {
  entry: {
    main: "./src/index",
    admin: "./src/admin"
  },
  mode: "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1,
    },
    runtimeChunk: "single"
  }
};