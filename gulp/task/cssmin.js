/**
 * Created by Loki.Luo on 2017/3/8.
 */
var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),

    config = require('../config');// gulp公共配置

exports.task = function () {
    return gulp.src(config.paths.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest(config.output))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.output+'/main'))
};