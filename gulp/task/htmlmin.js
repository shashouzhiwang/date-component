/**
 * Created by Loki.Luo on 2017/3/2.
 */
var gulp = require('gulp');
    htmlmin = require('gulp-htmlmin'),
    config = require('../config');// gulp公共配置


var htmlOption = {
    removeComments:false,
    collapseWhitespace:false,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: false,
    minifyCSS: true
};
//gulp.task('htmlmin',function(){
//    return gulp.src(["app/*.html","app/**/**/*.html","app/**/**/*.html"])
//        .pipe(htmlmin(htmlOption))
//        .pipe(gulp.dest(destPath));
//});


exports.task = function () {
    return gulp.src(config.paths.html)
        .pipe(htmlmin(htmlOption))
        .pipe(gulp.dest(config.output));
};