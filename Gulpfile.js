"use strict";

const gulp = require('gulp');
const mocha = require('gulp-mocha');
var handlebars = require('gulp-compile-handlebars');

gulp.task('test', () => {
	gulp.src('public/qa/**.js', {read: false})
		.pipe(mocha({
			ui: 'tdd',
			reporter: 'html'
		}));
});

gulp.task('hbs', () => {
	return gulp.src('views/**/*.hbs')
		.pipe(handlebars())
		// .pipe(rename('hello.html'))
		.pipe(gulp.dest('dist'));
});