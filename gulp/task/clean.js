/**
 * Created by Loki.Luo on 2017/3/2.
 */
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    config = require('../config');// gulp公共配置

exports.task = function () {
    return gulp.src([config.output+'/*', config.debug,"!"+config.outPaths.skin])
        .pipe(clean({force: true}))
};