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
        test: /.css$/,
        use: ["style-loader", "css-loader"]
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
