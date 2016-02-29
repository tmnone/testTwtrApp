"use strict";

// Gulp plugins
var gulp = require('gulp'),
    KarmaServer = require('karma').Server,
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    newer = require('gulp-newer'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    templateCache = require('gulp-angular-templatecache'),
    connect = require('gulp-connect');

// Sources
var src = {
  'css':  ['assets/stylesheets/app.scss'],
  'html': ['assets/views/pages/**/*.html'],
  'tpls': ['assets/views/tpls/**/*.html'],
  'js':   ['assets/javascripts/**/*.coffee']
}

// Dests
var dest = {
  'scss': 'build/css',
  'js'  : 'build/js',
  'html': 'build/pages'
}

// Watches
var watch = {
  'css':  ['assets/stylesheets/**/*.scss'],
  'html': ['assets/views/pages/**/*.html'],
  'tpls': ['assets/views/tpls/**/*.html'],
  'js':   ['assets/javascripts/**/*.coffee']
} 

// Server
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 4567,
    livereload: true
  });
});

// CSS
gulp.task('css', function () {
  gulp.src(src.css)
    .pipe(plumber())
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('> 1%', 'last 2 version', 'ie 9', 'ios 6', 'android 4'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(dest.scss))
    .pipe(connect.reload());
});

// TPLS
gulp.task('tpls', function () {
  gulp.src(src.tpls)
    .pipe(plumber())
    .pipe(templateCache('tpl.js', { module:'templatescache', standalone:true}))
    .pipe(gulp.dest(dest.js))
    .pipe(connect.reload());
});

// HTML
gulp.task('html', function () {
  gulp.src(src.html)
    .pipe(gulp.dest(dest.html))
    .pipe(connect.reload());
});

// JS
gulp.task('js', function() {
  gulp.src(src.js)
    .pipe(newer(dest.js))
    .pipe(plumber())
    .pipe(gulpif(/[.]coffee$/, coffee()))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dest.js))
    .pipe(connect.reload())
});

// Watch
gulp.task('watch', function() {
  gulp.watch(watch.html, ['html']);
  gulp.watch(watch.css,  ['css']);
  gulp.watch(watch.tpls, ['tpls']);
  gulp.watch(watch.js,   ['js']);
});

// Test
gulp.task('tdd', function (done) {
  console.log('Karma config path', __dirname + '/karma.conf.js');

  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();

});

// Default
gulp.task('default', ['css', 'html', 'tpls', 'js', 'watch', 'connect']);
gulp.task('test', ['tdd']);