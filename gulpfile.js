const gulp = require('gulp');

const pug = require('gulp-pug');
const rename = require('gulp-rename');

const sass = require('gulp-sass')(require('sass'));
const autoprefix = require('gulp-autoprefixer');
const cssMin = require('gulp-minify-css');

const browserSync = require('browser-sync').create();

gulp.task('html', function () {
  return gulp
    .src([
      'pug/main.pug'
    ])
    .pipe(pug({
        pretty: true,
      })
    )
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
});

gulp.task('css', function () {
  return gulp
    .src([
      'sass/main.sass'
    ])
    .pipe(autoprefix('last 10 version'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});


gulp.task('init',  function () {
  const files = [
    '*.html',
  ];
  browserSync.init(files,{
    injectChanges: true,
    server: {
      baseDir: "./",
      browser: "google chrome",
      reloadDelay: 1000,
    }
  });
  gulp.watch("pug/**/*.pug", gulp.series('html','refresh')).on('change', browserSync.reload);
  gulp.watch("sass/**/*.sass", gulp.series('css','refresh')).on('change', browserSync.reload);
});