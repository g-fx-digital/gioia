const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: [
        "./src/index.js"
    ], 
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    mode: "production",
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
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        }
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                use: 'url-loader?limit=100000'
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
            '@': resolve('src')
        }
    }
}