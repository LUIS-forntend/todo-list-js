const { src, dest, watch, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

function minifyJS(){
  return src('src/*.js')
    .pipe(sourcemaps.init())  
    .pipe(concat('main.js'))
    .pipe(terser({
      toplevel: true,
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist/'));
}

function watchTask(){
  watch('src/*.js', minifyJS)
}

exports.default = series(minifyJS, watchTask);