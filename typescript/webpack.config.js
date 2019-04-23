const path = require('path')

module.exports = {
    entry: './typescript/src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.t|js$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'typescript-bundle.js',
        path: path.resolve('./', 'build'),
    },
    mode: 'development',
}
