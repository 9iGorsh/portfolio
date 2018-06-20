var gulp1 =require('gulp'),
postcss =require('gulp-postcss'),
autoprefixer =require('autoprefixer'),
cssvars =require('postcss-simple-vars'),
nested =require('postcss-nested'),
cssImport =require('postcss-import'),
mixins =require('postcss-mixins'),
hexrgba =require('postcss-hexrgba');


gulp1.task('styles', function(){
	
	return gulp1.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
	.on('error', function(erInfo){
		console.log(erInfo.toString());
		this.emit('end');
	})
	.pipe(gulp1.dest('./app/temp/styles'));
})
