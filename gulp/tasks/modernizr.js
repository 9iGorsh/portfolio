var gulp =require('gulp'),
modernizr =require('gulp-modernizr');

gulp.task('modernizr', function(){
	
	var settings = { 
    "options" : [
      "setClasses"
	  ]
	};
	return gulp.src(['.app/assets/styles/**/*.css', '.app/assets/scripts/**/*.js'])
	.pipe(modernizr(settings))
	.on('error', function(erInfo){
		console.log(erInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/scripts/'));
});