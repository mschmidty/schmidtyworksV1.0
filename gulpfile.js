

//Include our plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');



// Compile Our Sass
gulp.task('styles', function() {
    return gulp.src('src/scss/*.scss')
	    .pipe(sass({ style: 'expanded' }))
	    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	    .pipe(gulp.dest('css'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('css'))
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('images'))
});




// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['styles']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/scripts/*.js', ['scripts']);



    // Watch tasks go inside inside server.listen()

});

// Default Task
gulp.task('default', ['styles', 'watch', 'images', 'scripts']);
