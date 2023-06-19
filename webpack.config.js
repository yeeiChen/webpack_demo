/*
 * @Description:
 * @Author: yeeChen
 * @Date: 2023-06-19 10:38:30
 * @LastEditTime: 2023-06-19 15:59:08
 * @LastEditors: yeeChen
 */

const path = require("path");
const { Configuration } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

/**
 * @type {Configuration}
 */

const config = {
  mode: "development",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.less$/, // 解析less
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.ts$/, // 解析ts
        loader: "ts-loader",
        options: {
          configFile: path.resolve(process.cwd(), "tsconfig.json"),
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  output: {
    filename: "[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".vue", ".ts", ".js"],
  },
  stats: "error-only", // 删除npm run dev时没有用的提示
  devServer: {
    port: 9001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here: http://localhost:8080"],
      },
    }),
  ],
  externals: {
    vue: "Vue",
  },
};

module.exports = config;
