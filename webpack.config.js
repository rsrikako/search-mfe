const { shareAll } = require('@angular-architects/module-federation/webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  output: {
    publicPath: 'http://localhost:4202/',
    uniqueName: 'search',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'search',
      library: { type: 'var', name: 'search' },
      filename: 'remoteEntry.js',
      exposes: {
        SearchModule: './src/app/search/search.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true }
      },
    }),
  ],
};
