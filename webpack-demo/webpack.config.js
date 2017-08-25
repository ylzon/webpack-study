const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                loader: "babel-loader"
            },
            {
                test: /\.tpl$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                loader: "ejs-loader"
            },
            {
                test: /\.html$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                use: [
                    'style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                }),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                use: [
                    'style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                }),
                            ]
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            title: '12312312312',
            inject: 'body',
            // date: new Date(),
            // chunks: ['main'],
            // excludeChunks: ['a']
            // minify: {
            //     collapseWhitespace:true,
            //     removeComments：true

            // }
        })
    ]

}