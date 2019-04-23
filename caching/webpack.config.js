const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './caching/src/index.ts',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /.t|jsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /.(png|svg|jpg)$/,
                use: 'file-loader',
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]',
                            camelCase: true,
                        },
                    },
                ],
            },
        ],
    },
    mode: 'development',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
    },
    output: {
        filename: 'caching.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },
}
