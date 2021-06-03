//导入path模块
const path = require("path");
//定义JS打包规则
module.exports = {
    //入口函数从哪里开始编译打包
    entry: "./src/main.js",
    //编译成功后把内容输出到哪里去
    output: {
        //定义输出的指定目录__dirname当前项目的根目录，生成第三天文件
        path: path.resolve(__dirname, "./dist"),
        //合并js文件储存在dist/bundule.js文件中
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,//把项目中所有的.css结尾的文件进行打包
            use: ["style-loader", "css-loader"]
        }]
    }
}