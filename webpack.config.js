const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/, //如果附檔名是css
                use:['style-loader','css-loader'] //先執行css-loader 再style-loader
            }, 
            {
                test: /\.(js|jsx)$/, //附檔名是js或jsx
                exclude: /node_modules/, //避免不要的檔案也做翻譯
                use: ['babel-loader'] //轉成ES5後再打包
            }
        
        ]
    }
}