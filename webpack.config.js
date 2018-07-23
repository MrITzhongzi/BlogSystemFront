const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        "editor": "./src/script/editor.js",
        "index": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        // library: "", // require时的模块名
    },
    module: {
        rules: [
            {
                test: /.css$/,
                include: [
                  path.resolve(__dirname, "src/style")
                ],
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src/")
                ],
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）

        modules: [
            "node_modules",
            path.resolve(__dirname, "")
        ],  // 用于查找模块的目录
        extensions: [".js", ".json", ".jsx", ".css"],

        alias: {
            // 模块别名列表
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        host: "localhost",
        port: 9000,
        open: true, // 自动打开浏览器
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "blog",
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "editor.html",
            template: "./src/template/editor.html",
            chunks: ["editor"]
        })
    ]
}