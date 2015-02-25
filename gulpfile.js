// -----------------------------------------------------------
var gulp 			= require('gulp'),
	compass 		= require('gulp-compass'),
	autoPrefixer 	= require('gulp-autoprefixer'),
	minifyCSS 		= require('gulp-minify-css'),
	browserify 		= require('gulp-browserify'),
	concat			= require('gulp-concat'),
	copy 			= require('gulp-copy'),
	cache 			= require('gulp-cache'),
	imagemin 		= require('gulp-imagemin'),
	livereload 		= require('gulp-livereload'),
	jade 			= require('gulp-jade'),
	webserver 		= require('gulp-webserver');
// -----------------------------------------------------------


gulp.task('compass', function() {
	gulp.src("src/sass/*.scss")
	.pipe(compass({
		sass: 	"src/sass/",
		css: 	'.tmp',
		output: 'expanded'
	}))
	.on('error', function(error) {
		console.log(error);
		this.emit('end');
	})
	.pipe(autoPrefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest("build/css"));
});
gulp.task('templates', function() {
  gulp.src('src/jade/**/*.jade')
	.pipe(jade({}))
	.on('error', function(error) {
		console.log(error);
		this.emit('end');
	})
	.pipe(gulp.dest('./build'))
});

gulp.task('images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(cache(
    	imagemin(
    		{ 
    			optimizationLevel: 3, 
    			progressive: true, 
    			interlaced: true
    		}
    	)
    ))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('browserify', function() {
	gulp.src(['src/javascripts/main.js'])
	.pipe(browserify({
		insertGlobals: true,
		debug: true
	}))
	.on('error', function(error) {
		console.log(error);
		this.emit('end');
	})
	.pipe(concat('app.js'))
	.pipe(gulp.dest('build/js'));
});

gulp.task('insert-bin',function(){
	return gulp.src('src/bin/**')
	.pipe(copy('build/bin',{
		prefix:2
	}));
});

gulp.task('webserver', function() {
  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
});
gulp.task('watch', function() {
	gulp.watch("src/sass/**/*", ['compass']);
	gulp.watch('src/jade/**/*.jade', ['templates']);
	gulp.watch('src/javascripts/**', ['browserify']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/bin/**', ['insert-bin']);
});
gulp.task('build-all',['sass','templates','browserify','images','insert-bin']);
gulp.task('default',['watch','webserver']);