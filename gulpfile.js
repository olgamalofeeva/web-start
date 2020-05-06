const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      cleanCSS = require('gulp-clean-css');

gulp.task('hello', (done) => {
console.log('Привет, мир!')
done();
});

// новый плагин автоматическое обновление html страницы 
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});
//новый плагин clean css
gulp.task('min', () => {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});