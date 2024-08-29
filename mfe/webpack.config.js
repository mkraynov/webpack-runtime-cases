const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: "./hello",
  mode: "development",
  devtool: false,
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
  },
  output: {
    publicPath: '/mfe/dist/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hello_mf',
      filename: 'remoteEntry.js',
      exposes: {
        './hello': './hello'
      }
    }),
  ]
};