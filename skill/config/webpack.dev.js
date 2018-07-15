const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:path.resolve("src/main.jsx"),
    output:{
        filename:"[name]-build.js",
        path:path.resolve("dist"),
        publicPath:"/"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
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
                        attrs:["src:img"]
                    }
                }]
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:["url-loader"]
            },
            {
                test:/\.(svg|eot|ttf|woff)$/,
                use:["url-loader"]
                        //谷歌,IE,苹果,web          
            },
            {
                test:/\.(js|jsx)$/,
                use:["babel-loader"],
                exclude:/node_modules/
            }

        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve("src/index.html"),
            filename:"index.html",
            title:"周考模板",
            data:"这里可以传数据直接在indexhtml里用esj模板渲染",
            minify:{
                collapseWhitespace:true,	//清除空白区域
                removeAttributeQuotes:true,	//清除HTML双引号
                minimize: true,				//压缩代码
                removeComments: true,		//移除注释
                collapseWhitespace: true,	//去掉空格
                minifyCSS: true,			//压缩行内css
                minifyJS: false				//压缩行内js
            },
            hash:true
            
        })
    ],
    devServer:{
        contentBase:path.resolve("dist"),
        host:"localhost",
        port:8888,
        hot:true,
        overlay:true,
        open:true,
        before(app){
            app.get("/data",(request,response,next)=>{
                response.end("before返回的数据")
            })
        },
        setup(app){
            app.get("/data2",(request,response,next)=>{
                response.end("setup返回的数据")
            })
        }
    }
}
