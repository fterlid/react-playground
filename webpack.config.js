const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'babel-polyfill',
        './src/client'
    ],

    output: {
        path: './dist',
        publicPath: 'http://localhost:8080/',
        filename: 'app.bundle.js'
    },

    resolve: {
        modulesDirectories: ['node_modules', 'src/shared'],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    plugins: [new webpack.HotModuleReplacementPlugin()]
};