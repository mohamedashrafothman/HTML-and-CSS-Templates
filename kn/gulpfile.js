'use strict'

var gulp        = require('gulp');
var pug         = require('gulp-pug');
var sass        = require('gulp-sass');
var cssmin      = require('gulp-cssmin');
var rename      = require('gulp-rename');
var prefix      = require('gulp-autoprefixer');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var imagemin    = require('gulp-imagemin');
var browserify  = require('browserify');
var babelify    = require('babelify');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');
var sourcemaps  = require('gulp-sourcemaps');
var notify      = require("gulp-notify");
var browserSync = require('browser-sync').create();


// Compile Pug
gulp.task('pug', function () {
	return gulp.src('src/views/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream())
		.pipe(notify("your HTML5 files are ready now, Yeah!! 😆"));
});

// Configure CSS tasks.
gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(prefix('last 2 versions'))
		.pipe(sourcemaps.write())
		.pipe(cssmin())
		.pipe(concat('styles.css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/styles'))
		.pipe(browserSync.stream())
		.pipe(notify("your CSS files are ready now, Yeah!! 😆"));
});

// Configure JS.
gulp.task('js', function () {
	return browserify({
			entries: 'src/scripts/script.js',
			debug  : true
		})
		.transform("babelify", {
			presets: ["es2015"]
		})
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/scripts'))
		.pipe(browserSync.stream())
		.pipe(notify("your JS files are ready now, Yeah!! 😆"));
});

// Configure fonts.
gulp.task('fonts', function () {
	return gulp.src('src/fonts/**/*.+(eot|svg|ttf|woff|woff2)')
		.pipe(gulp.dest('build/fonts'))
		.pipe(browserSync.stream());
});

// Configure image stuff.
gulp.task('images', function () {
	return gulp.src('src/images/**/*.+(png|jpg|gif|svg|ico)')
		.pipe(imagemin({
			optimizationLevel: 5,
		}))
		.pipe(gulp.dest('build/images'))
		.pipe(browserSync.stream());
});


gulp.task('default', ['pug', 'sass', 'js', 'fonts', 'images'], function () {
	browserSync.init({
		server: './build',
		open  : false
	});

	gulp.watch('src/views/**/*.pug', ['pug']);
	gulp.watch('src/views/*.pug', ['pug']);
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/scripts/**/*.js', ['js']);
	gulp.watch('src/scripts/*.js', ['js']);
	gulp.watch('src/fonts/**/*.+(eot|svg|ttf|woff|woff2)', ['fonts']);
	gulp.watch('src/images/**/*.+(png|jpg|gif|svg|ico)', ['images']);
	gulp.watch('./build/*.html').on('change', browserSync.reload);
});