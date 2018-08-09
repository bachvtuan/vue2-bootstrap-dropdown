var webpack = require('webpack');

module.exports = require('./webpack.config.js');



module.exports.entry = {
    'bootstrap-dropdown': './src/main.js',
}

module.exports.output.library = 'Vue2BootstrapDropdown';
module.exports.output.libraryTarget = 'umd';
