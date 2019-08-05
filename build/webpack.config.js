const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: [
        "./rest-theme/src/index.js"
    ], 
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
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
                                    useBuiltIns: "usage"
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [
            '.js',
            '.vue',
            '.json'
        ],
        alias: {
            '@': resolve('rest-theme/src')
        }
    }
}