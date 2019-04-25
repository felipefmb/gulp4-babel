const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function js() {
    return src('src/app.js')
    .pipe(babel({
        presets: ["@babel/preset-env"]
    }))
    .pipe(concat('app.min.js'))
    .pipe(dest('dist'))
  }

exports.default = js;

