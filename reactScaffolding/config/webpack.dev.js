const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const entrance = path.resolve("src/main.js");
const exit = path.resolve("dist");

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
                        attrs:["img:src"]
                    }
                }]
            },
            {
                test:/\.(jpg|png|git)$/,
                use:["url-loader"],
            },
            {   //google(svg) ie(eot) apple(ttf) web(woff)
                test:/\.(svg|eot|ttf|woff)$/,
                use:["url-loader"]
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
        new HtmlWebpackPlugin({
            template:path.resolve("src/index.html"),
            filename:"index.html"
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
                response.end("before响应数据");
            });
        },
        setup(app){
            app.get("/data",(request,response,next)=>{
                response.end("setup响应数据");
            });
        }
    }

}

