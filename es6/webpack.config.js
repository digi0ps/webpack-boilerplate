const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]",
              camelCase: true
            }
          }
        ]
      },

      {
        test: /.(png|svg|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name]-[hash].[ext]"
            }
          }
        ]
      }
    ]
  },

  mode: "development"
};
