const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

gulp.task('build', () => {

  return gulp.src('src/lightcss.less')
		  	.pipe(plumber())
		    .pipe(less())
		    .pipe(autoprefixer())
		    .pipe(gulp.dest('dist'));
})

gulp.task('dev', ['build'], () => {
  gulp.watch('src/**/*.less', () => {
      console.log('change');
      return gulp.src('src/lightcss.less')
		  	.pipe(plumber())
		    .pipe(less())
		    .pipe(autoprefixer())
		    .pipe(gulp.dest('dist'));
  })
})