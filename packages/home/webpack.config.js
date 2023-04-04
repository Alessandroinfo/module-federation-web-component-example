const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const deps = require("./package.json").dependencies;
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: [".js"],
    },
    output: {
        publicPath: "http://localhost:4000/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "home",
            filename: "remoteEntry.js",
            remotes: {
                nav: "header@http://localhost:4001/remoteEntry.js"
            },
            shared: {
                ...deps
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Module Federation Example',
            filename: './index.html',
            template: './index.html',
        }),
    ],
}
