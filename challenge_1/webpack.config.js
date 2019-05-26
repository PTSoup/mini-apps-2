const webpack = require('webpack');
const path = require('path');
const SRC_DIR = path.join(__dirname, './client/index.jsx');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: SRC_DIR,
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    module : {
        rules : [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    }
};