var gulp=require('gulp');

gulp.task('laila',function(){

	//return gulp.src('*.html').pipe(gulp.dest('dist'));
	//return gulp.src('css/*.css').pipe(gulp.dest('dist/css'));

	//return gulp.src('js/*.js').pipe(gulp.dest('dist/js'));

	//return gulp.src('img/*.*').pipe(gulp.dest('dist/img'));
	return gulp.src('fonts/*.*').pipe(gulp.dest('dist/fonts'));
})