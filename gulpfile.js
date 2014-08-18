//Include gulp
var gulp = require('gulp');

//Include our plugins
var	sass = require('gulp-ruby-sass');
var	autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var	minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var	livereload = require('gulp-livereload');
var	rename = require("gulp-rename");
var	lr = require('tiny-lr');
var	server = lr();

// Compile Our Sass
gulp.task('styles', function() {
    return gulp.src('src/scss/*.scss')
	    .pipe(sass({ style: 'expanded' }))
	    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	    .pipe(gulp.dest('css'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('css'))
	    .pipe(livereload(server))
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(livereload(server))
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('images'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['styles']);
    gulp.watch('src/images/*', ['images']);
    gulp.watch('src/scripts/*.js', ['scripts']);

    server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    // Watch tasks go inside inside server.listen()

  });

});

// Default Task
gulp.task('default', ['styles', 'watch', 'images', 'scripts']);