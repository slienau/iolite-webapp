module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './dist',
        open: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
