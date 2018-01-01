/**
 * Created by Loki.Luo on 2017/3/2.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),

    config = require('../config');// gulp公共配置

exports.task = function () {
    return gulp.src([config.paths.js,'!'+config.paths.docJs])
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat("main.js"))
        .pipe(gulp.dest(config.output))
        .pipe(uglify({mangle : true}))
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.output+'/main'))
};
