const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const minifycss = require('gulp-minify-css');
const rename = require("gulp-rename");

gulp.task('build', () => {

  return gulp.src('src/lightcss.less')
	     .pipe(plumber())
	     .pipe(less())
	     .pipe(autoprefixer())
	     .pipe(gulp.dest('dist'))
	     .pipe(minifycss())
	     .pipe(rename({ suffix: ".min" }))
	     .pipe(gulp.dest('dist'));
})

gulp.task('dev', ['build'], () => {
  gulp.watch('src/**/*.less', () => {
    return gulp.src('src/lightcss.less')
	       .pipe(plumber())
	       .pipe(less())
	       .pipe(autoprefixer())
	       .pipe(gulp.dest('dist'));
	})
})
