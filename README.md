# react-scripts-rewrite

👨🏻‍💻 author: yoneyy (y.tianyuan)

## How to install?
```sh
  # yarn
  yarn add react-scripts-rewrite -D --registry=https://registry.npmjs.org/

  # npm
  npm i react-scripts-rewrite -D --registry=https://registry.npmjs.org/
```

## How to use?

First create a `config-overrides.js` configuration file in the project root path, then enter the configuration item.
The configuration items are as follows ⬇️

Everything follows [webpack🔍](https://webpack.js.org/) configuration

```js
/*
 * @Author: Yoneyy (y.tianyuan) 
 * @Date: 2022-03-23 03:17:40 
 * @Last Modified by: Yoneyy (y.tianyuan)
 * @Last Modified time: 2022-04-02 19:03:38
 */

const CompressionWebpackPlugin = require("compression-webpack-plugin");

const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.(less)$/;
const stylesUseLoader = [
  'style-loader',
  'css-loader',
  {
    loader: 'less-loader',
    options: {
      lessOptions: {
        javascriptEnabled: true
      },
      webpackImporter: true,
    },
  },
];

module.exports = {
  babels: {
    presets: [
      // for more babel presets see https://babeljs.io/docs/en/presets
    ],
    plugins: [
      [
        "babel-plugin-import",
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        }
      ]
      // for more babel plugins see https://babeljs.io/docs/en/plugins/
    ]
  },
  rules: [
    {
      test: lessRegex,
      exclude: lessModuleRegex,
      use: stylesUseLoader
    },
    {
      test: lessModuleRegex,
      use: stylesUseLoader
    },
    // use more loaders
    // for more loaders see https://webpack.js.org/loaders/
  ],
  plugins: [
    new CompressionWebpackPlugin({
      test: /\.(css|js)$/,
      threshold: 1024,
      minRatio: 0.9
    })
  ].filter(Boolean)
  // use more plugins
  // for more plugins see https://webpack.js.org/plugins/
}
```

