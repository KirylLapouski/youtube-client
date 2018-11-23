let gulp = require("gulp");
let {watch, parallel} = require('gulp')
let mocha = require('gulp-mocha')
let babel = require('gulp-babel')
function defaultHanlder(){
  gulp.src('js/**.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
}

function testHandler() {
  gulp.src('tests/*.js')
    .pipe(gulp.src('js/*.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(mocha());
}

gulp.task('default',defaultHanlder )
gulp.task('test', testHandler)

watch('./js/*', parallel(defaultHanlder, testHandler))