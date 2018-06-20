var gulp1 =require('gulp'),
watch =require('gulp-watch'),
browserSync =require('browser-sync').create();

gulp1.task('watch', function(){
	
	browserSync.init({
		notify:false,
		server:{
			baseDir:"app"
		},
		browser: "chrome"
	});
	
	watch('./app/index.html', function(){
/*		gulp1.start('html'); */

		browserSync.reload();
	});
	
	watch('./app/assets/styles/', function(){
		gulp1.start('cssInject');
	});
	
	watch('./app/assets/scripts/', function(){
		gulp1.start('scriptsRefresh');
	});
});

gulp1.task('cssInject', ['styles'], function(){
	return gulp1.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp1.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});