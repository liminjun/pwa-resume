/**
 * @file vue-loader 配置文件
 * @author lee(v-leeli@hotmail.com)
 */

'use strict';

const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,

        // extract: isProduction
        extract: true
    })
};
