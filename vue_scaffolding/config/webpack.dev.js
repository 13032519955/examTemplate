const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderLibPlugin = require("vue-loader/lib/plugin")

let itemsDir = "learnVuex"; //项目地址 直接修改这里就好
let entrance = path.resolve(`src/${itemsDir}/main.js`);
let htmlEntance = path.resolve(`src/${itemsDir}/index.html`)
let exit = path.resolve("dist");

module.exports = {
    entry:entrance,
    output:{
        filename:"[name]-build.js",
        path:exit,
        publicPath:"/"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.html$/,
                use:[{
                    loader:"html-loader",
                    options:{
                        attrs:["img:src"]   //处理图片路径
                    }
                }]
            },
            {
                test:/\.vue$/,
                use:["vue-loader"]
            },
            {
                test:/\.(jpg|png|git)$/,
                use:["url-loader"]
            },
            {
                test:/\.(svg|eot|ttf|woff)$/, //svg(google) eot(ie) ttf(mac) woff(web)
                use:["url-loader"]
            },
            {
                test:/\.js$/,
                use:["babel-loader"],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new VueLoaderLibPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:htmlEntance,
            filename:"index.html",
        })
    ],
    devServer:{
        contentBase:exit,
        host:"localhost",
        port:8888,
        open:true,
        overlay:true,
        hot:true,
        before(app){
            app.get("/data",(request,response,next)=>{
                response.end("return before");
            });
        },
        setup(app){
            app.get("/data2",(request,response,next)=>{
                response.end("return setup");
            });
        }

    }
}