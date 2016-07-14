var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    watch = require('gulp-watch');

var errorHandler = function (error) {
  console.log(error.message);
  this.emit("end");
}

gulp.task('default', ['styles']);

gulp.task('styles', function() {
  return gulp.src('./src/sass/application.sass')
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(sass({ indentedSyntax: true }).on('error', util.log))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({ stream:true }))
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(concat("application.js"))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.reload({ stream:true }))
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch('./src/sass/**/*.sass', function(){ gulp.start('styles'); });
  watch('./src/js/**/*.js', function(){ gulp.start('scripts'); });
});