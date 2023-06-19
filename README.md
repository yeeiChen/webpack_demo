<!--
 * @Description:
 * @Author: yeeChen
 * @Date: 2023-06-19 15:41:53
 * @LastEditTime: 2023-06-19 15:57:26
 * @LastEditors: yeeChen
-->

# webpack_demo

a demo of webpack
本 demo 需要以下几个 loader 以及 plugin

```js
 "dependencies": {
        "@vue/compiler-sfc": "^3.3.4",
        "clean-webpack-plugin": "^4.0.0",
        "css-loader": "^6.8.1",
        "friendly-errors-webpack-plugin": "^1.7.0",
        "html-webpack-plugin": "^5.5.3",
        "less-loader": "^11.1.3",
        "style-loader": "^3.3.3",
        "ts-loader": "^9.4.3",
        "typescript": "^5.1.3",
        "vue": "^3.3.4",
        "vue-loader": "^17.0.1",
        "webpack": "^5.87.0",
        "webpack-cli": "^5.1.4",
        "webpack-dev-server": "^4.15.1"
    }
```

webpack-config 说明

mode:告知 webpack 使用相应模式的内置优化。
entry:入口文件
module:在模块化编程中，开发者将程序分解为功能离散的 chunk，并称之为 模块。

```js
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
```

output:即使可以存在多个 entry 起点，但只能指定一个 output 配置。
多个入口文件

```js
module.exports = {
  entry: {
    app: "./src/app.js",
    search: "./src/search.js",
  },
  output: {
    fileName: "[hash].js",
    path: __dirname + "/dist",
  },
};

// 写入到硬盘中 ./dist/app.js  ./dist/search.js
```

plugin:插件
externals:丛输出的 bundle 中排出依赖,一般配合 cdn 使用

```js
module.exports = {
  externals: {
    vue: "Vue", // 此时打包后的dist文件不包含对vue文件解析的bundle
  },
};
```
