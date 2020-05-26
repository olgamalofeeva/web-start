const {src, dest, watch, series} = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      minify = require('gulp-minify'),
      htmlmin = require('gulp-htmlmin'),
      tinypng = require('gulp-tinypng-compress');

// новый плагин автоматическое обновление html страницы 
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./scss/**/*.scss", serveSass);
  watch("./*.js").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/**/*.sass", "./scss/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

function buildCSS(done) {
  src('css/**/**.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('dist/css'));
  done();
}

function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({
      ext:{
          min:'.js'
      },
      exclude: ['tasks']}))
    .pipe(dest('dist/js/'));
    src('js/**.min.js').pipe(dest('dist/js/'));
  done()
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done()
}

function php(done) {
  src('**.php')
    .pipe(dest('dist/'));
  src('phpmailer/**/**')
    .pipe(dest('dist/phpmailer/'));
  done()
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts/'));
  done()
}

function imagemin(done) {
  src('img/**/**')
    .pipe(tinypng({
      key: 'HQdSgqf132jzDq0N84M7FRHtKxt5rQDF'
  }))
    .pipe(dest('dist/img/'));
  src('img/types/**')
    .pipe(tinypng({
      key: 'HQdSgqf132jzDq0N84M7FRHtKxt5rQDF'
  }))
    .pipe(dest('dist/img/types/'));
  src('img/**/*.svg')
    .pipe(dest('dist/img/'));
  src('img/**/*.svg')
    .pipe(dest('dist/img/'));
  done()
}
exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin)