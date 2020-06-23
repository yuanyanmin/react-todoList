module.exports = {
    entry: './main.js',   // 入口文件
    output: {
        filename: './bundle.js'  // 输出之后的文件名
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ]
    },
    devtool: 'cheap-source-map'
}