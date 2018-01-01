/**
 * Created by Loki.Luo on 2017/3/2.
 */
var VERSION = require('../package.json').version;
var serve = require('browser-sync');
var path = require('path');
var root = 'src';
var output = 'build';
function resolveToApp(files) {
    return path.join(root, files);
}

function resolveToOut(files) {
    return path.join(output, files);
}

module.exports = {
    banner: '',
    output: 'build',
    debug: 'debug',
    entry: '',
    root: 'src',
    outPaths:{
        skin:resolveToOut('/skin')
    },
    paths: {
        js: resolveToApp('/**/*!(.doc.js).js'),
        docJs: resolveToApp('/**/*.doc.js'),
        css:resolveToApp('/**/!(iconfont)*.scss'),
        img:resolveToApp('/**/image/*.*'),
        font:resolveToApp('/**/font/*.*'),
        html: [
            resolveToApp('/**/*.html')
        ],
        styl: resolveToApp('**/*.styl')
    },
    serve: serve
};