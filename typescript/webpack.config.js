const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './typescript/src/index.ts',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Typescript',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.t|js$/,
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
                            localIdentName: '[path][name]__[local]',
                            camelCase: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'typescript-bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    mode: 'development',
}
