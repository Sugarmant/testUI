const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

const dirname = __dirname.replace('build','')

module.exports = {
    entry: {
        'index':path.resolve(dirname, `public/index.js`),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(dirname,'./dist'),
        clean:true,
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            },
            {
                test: /\.less$/i,
                use: ["css-loader","less-loader"],
            }
        ],
    },
    devtool: 'inline-source-map',
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: dirname + '/public/index.html',
            chunks:['index']
        })
    ]
};