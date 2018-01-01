/**
 * Created by Loki.Luo on 2017/3/5.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    yuidoc = require("gulp-yuidoc"),
    jsdoc = require("gulp-jsdoc3"),
    config = require('../config');// gulp公共配置

//exports.task = function () {
//    //return gulp.src(config.paths.js)
//    return gulp.src('src/index.js')
//        .pipe(yuidoc.parser())
//        .pipe(yuidoc.reporter())
//        .pipe(yuidoc.generator())
//        .pipe(gulp.dest("./doc"));
//};


exports.task = function (cb) {
   // var  jsdocConfig = require('../jsdoc-config');
   //  return gulp.src(config.paths.docJs,{read: false})
   //  //return gulp.src('src/index.js',{read: false})
   //  //return gulp.src('src/0-asyn-load/asyn-load.js',{read: false})
   //      .pipe(jsdoc(jsdocConfig),cb);
};

