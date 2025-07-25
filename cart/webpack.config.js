const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      remotes: {
      },
      exposes: {
        "./CartItem": "./src/components/CartItem.tsx",
        "./CartItemList": "./src/components/CartItemList.tsx",
        "./CartPopover": "./src/components/CartPopover.tsx",
        "./BoxProductList": "./src/components/BoxProductList.tsx",},
     shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "babel-runtime": {
          singleton: true,
          requiredVersion: deps["babel-runtime"],
        },
        "styled-components": {
          singleton: true,
          requiredVersion: deps["styled-components"]
        },
        "@emotion/react": {
          singleton: true,
          requiredVersion: deps["@emotion/react"],
        },
        "@emotion/styled": {
          singleton: true,
          requiredVersion: deps["@emotion/styled"],
        }
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});