module.exports = {
    entry: ['babel-polyfill', '.src/client'],
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};