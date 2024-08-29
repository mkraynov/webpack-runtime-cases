const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

module.exports = {
  entry: "./index",
  mode: "development",
  devtool: false,
  // devServer: {
  //   static: path.join(__dirname, "dist"),
  //   port: 3001,
  // },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        'hello_remote': 'hello_mf@http://[helloUrl]/remoteEntry.js'
      }
    }),
    new ExternalTemplateRemotesPlugin(),
  ]
};