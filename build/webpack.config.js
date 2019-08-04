const path = require('path')

module.exports = {
    entry: {
        
    }, //"./rest-theme/src/index.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'gioia.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "env",
                                {
                                    targets: {
                                        browsers: [
                                            "Chrome >= 52",
                                            "FireFox >= 44",
                                            "Safari >= 7",
                                            "Explorer 11",
                                            "last 4 Edge versions"
                                        ]
                                    },
                                    useBuiltIns: true
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
}