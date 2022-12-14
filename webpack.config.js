'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: __dirname + "/src/js/main.js",
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src/js/'
    },
    watch: true,

    devtool: "source-map",

    module: {}
};
