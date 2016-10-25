module.exports = {
    entry: ['babel-polyfill', './src/client'],
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'app.bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src/shared'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};