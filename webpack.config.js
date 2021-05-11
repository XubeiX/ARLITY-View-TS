var path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        app: './scr/ARLITYView.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'ARLITYUtils',
        libraryTarget: 'var'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', ".jsx"]
    },
    devtool: 'source-map',
    plugins: [

    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
              terserOptions:{
                  compress:{
                      drop_console: false,
                  },
              },  
            }),
        ],
        splitChunks: {
          chunks: 'all',
          name: "vendors"
        },
      }
}