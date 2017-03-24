(function () {

	var gulp = require('gulp');
	var uglify = require('gulp-uglify');
	var babel = require('gulp-babel');
	var concat = require('gulp-concat');

	gulp.task('uglify', function () {
		return gulp.src('client/src/**/*.js')
			.pipe(babel())
			.pipe(uglify())
			.pipe(concat('all.js'))
			.pipe(gulp.dest('client/dist'));
	});

	gulp.task('watch', function () {
		gulp.watch('client/se=rc/**/*.js', ['uglify'])
	})

})();
/* 
	This is a IIFE. import all the modules . Then generate 2 tasks in gulp. 
1> uglify -  work on everything in the client/src on all folders and all files in them ending with js. Then Babel it meaning change it from ES6 to ES5 and uglify it (minify it) then concat all of them into a all.js file and its destination is client/dist.

2> watch - watch all the js files in the path client/src and all folders and files in it ending with '.js', if anything changes, apply the task uglify to it.

*/
