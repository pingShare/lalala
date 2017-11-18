const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry:{
        show:'./src/entry.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'img/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss/,
                use:ExtractTextPlugin.extract({
                    use:[{
                    loader:'css-loader'
                    },{
                    loader:'sass-loader'
                    }],
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        new UglifyJsPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081
    }
}