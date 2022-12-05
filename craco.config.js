const path=require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
    //配置less
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#1DA57A",
                            "@link-color": "#1DA57A",
                            "@border-radius-base": "2px",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    // 配置webpack
    webpack:{
        alias:{//路径别名
            "@":path.resolve(__dirname,"src"),
            "components":path.resolve(__dirname,"src/components"),
        }
    }
}