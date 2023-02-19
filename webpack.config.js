const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry:{
    index:"./src/ts/index.ts",
    test:"./src/ts/test.ts"
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'src/html/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'test.html',
      template: 'src/html/test.html',
      chunks: ['test']
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
