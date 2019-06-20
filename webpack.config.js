// 处理路径模块
var path=require('path');
module.exports={

    // 
    mode:'development',
    // 配置入口
    entry:{
        js:"./app/app.js",
    },
    // 配置输出
    output:{
        // 文件输出
        path:path.resolve(__dirname+'/abc'),
        // 输出文件
        filename:"a.js"
    },
    // 配置loader
    module:{
        // loder规则
        rules:[
            {
                test:/\.css$/,

                // 使用loader
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            }
        ]
    }
}