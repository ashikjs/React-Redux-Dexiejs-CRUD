
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "./src"),
    entry: "../src/index.js",
    mode: "development", // enabled useful tools for development
    
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,  // a regular expression that catches .js files
                exclude: /node_modules/,
                loader: 'url-loader',
            },
            {
                test: /\.(js|.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ["env","react"],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules",
        ]
    },
    output: {
        path: __dirname + "/public/",
        // publicPath: "/public/",
        filename: "build.js"
    },
    devServer: {
        port: 4000, // You can change you want :) 
        contentBase: './public',
        inline: true,
        historyApiFallback: true,
    }
};