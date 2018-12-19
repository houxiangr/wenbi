'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [// webpack-dev-server的入口配置
            'webpack-dev-server/client?http://localhost:3000',
            // 热更新的入口配置
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            path.join(__dirname, 'app', 'index.js')
        ],
        login: [
            // webpack-dev-server的入口配置
            'webpack-dev-server/client?http://localhost:3000',
            // 热更新的入口配置
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            path.join(__dirname, 'app', 'login.js')
        ],
        register: [
            // webpack-dev-server的入口配置
            'webpack-dev-server/client?http://localhost:3000',
            // 热更新的入口配置
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            path.join(__dirname, 'app', 'register.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.tpl.html',
            inject: 'body',
            filename: './index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './app/index.tpl.html',
            inject: 'body',
            filename: './login.html',
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            template: './app/index.tpl.html',
            inject: 'body',
            filename: './register.html',
            chunks: ['register']
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', 'json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets: ['react', 'es2015']
                    }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
};