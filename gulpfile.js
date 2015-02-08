var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function() {
    gulp.src('./static-src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./static/css'));
});

gulp.task('default', function() {
    var watcher = gulp.watch('./static-src/scss/main.scss', ['sass']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
