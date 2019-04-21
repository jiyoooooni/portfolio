const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
