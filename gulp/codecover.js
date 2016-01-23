'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var codecov = require('gulp-codecov.io');

gulp.task('codecover', function(done) {
  gulp.src('./coverage/lcov.info')
  .pipe(codecov());
});

