const gulp = require('gulp');
const { watch, parallel } = require('gulp');
const mocha = require('gulp-mocha');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

function defaultHanlder() {
  return gulp.src('js/**.js')
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }))
    .pipe(browserify({
      insertGlobals: true,
    }))
    .pipe(gulp.dest('dist'));
}

function testHandler() {
  return gulp.src('tests/*.js')
    .pipe(mocha({
      compilers: ['js:@babel/register'],
    }));
}

gulp.task('default', defaultHanlder);
gulp.task('test', testHandler);
gulp.task('watch', (next) => {
  watch('./js/*', parallel(defaultHanlder, testHandler));
  watch('./tests/*', testHandler);
  next();
});
