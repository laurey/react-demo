const fs = require("fs");
const webpack = require("webpack");
const { resolve, join } = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin')

// generates html plugins
function generateHtmlPlugins(templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    // Split names and extension
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebpackPlugin({
      chunks: [name === "index" ? "home" : name],
      filename: `${name}.html`,
      template: resolve(__dirname, `${templateDir}/${name}.${extension}`),
    });
  });
}

// Call function on html directory
const htmlPlugins = generateHtmlPlugins("./src/html");

const extractCSS = new ExtractTextPlugin("style/[name].[hash]-css.css");
const extractSCSS = new ExtractTextPlugin("style/[name].[hash]-scss.css");

module.exports = (env, argv) => {
  const isDevelopmentMode = argv.mode !== "production";
  let config = {
    mode: argv.mode || "development",
    entry: {
      app: "./src/index.js",
    },
    output: {
      filename: "js/[name].[hash].js",
      path: resolve(__dirname, "build"),
    },
    module: {
      rules: [
        {
          test: /\.(mp4)$/,
          loader: "file-loader?name=asset/[name].[ext]",
        },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
          loader: "file-loader?name=image/[name].[ext]",
        },
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          use: "html-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/,
          use: extractSCSS.extract({
            use: [
              {
                loader: "css-loader",
              },
              {
                loader: "sass-loader",
              },
            ],
            fallback: "style-loader",
          }),
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: extractCSS.extract({
            use: "css-loader",
            fallback: "style-loader",
          }),
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      // new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      extractCSS,
      extractSCSS,
    ].concat(htmlPlugins),
  };

  if (argv.mode === "production") {
    config.devtool = "source-map";
    // http://vue-loader.vuejs.org/en/workflow/production.html
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        BROWSER_SUPPORTS_HTML5: true,
        PRODUCTION: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ]);
  }

  // test specific setups
  if (isDevelopmentMode) {
    // config.externals = [require('webpack-node-externals')()]
    config.devtool = "inline-source-map";
    config.devServer = {
      contentBase: [join(__dirname, "public"), join(__dirname, "asset")],
      watchContentBase: true,
      compress: true,
    };
  }

  return config;
};
