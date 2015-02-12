// -----------------------------------------------------------
var gulp 			= require('gulp'),
	compass 		= require('gulp-compass'),
	autoPrefixer 	= require('gulp-autoprefixer'),
	minifyCSS 		= require('gulp-minify-css'),
	rjs				= require('gulp-r'),
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
	.pipe(gulp.dest('./build'))
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
});
gulp.task('watch', function() {
	gulp.watch("src/sass/**/*", ['compass']);
	gulp.watch('src/jade/**/*.jade', ['templates']);
	//gulp.watch(paths.srcImg + "/**/*", ['images']);
});
gulp.task('default',['watch','webserver']);