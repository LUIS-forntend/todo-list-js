const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {

    mode: 'development',

    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
        ],
      },



    module: {
        rules: [



        //    {
        //         test: /.s?css$/,
        //         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        //    },






            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },


            {
                test: /\.css$/,
                exclude: /style\.css$/,

                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /style\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }            






        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            minify: false
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),

        new CopyPlugin(
            {

                patterns: [

                
                    {from: 'src/assets', to: 'assets/'},
                
               
                      ],


            }
        )


      
    ]

}

