let gulp = require("gulp");
let {watch, parallel} = require('gulp')
let mocha = require('gulp-mocha')
let babel = require('gulp-babel')

function defaultHanlder(){
  return gulp.src('js/**.js')
    .pipe(babel({
      presets:["@babel/preset-env", "@babel/preset-es2015"]
    }))
    .pipe(gulp.dest('dist'))
}

function testHandler() {
  return gulp.src('tests/*.js')
    .pipe(mocha({
      compilers:['js:@babel/register']
    }));
}

gulp.task('default',defaultHanlder )
gulp.task('test', testHandler)
gulp.task('watch',(next)=>{
  watch('./js/*', parallel(defaultHanlder, testHandler))
  watch('./tests/*', testHandler)
  next()
})
