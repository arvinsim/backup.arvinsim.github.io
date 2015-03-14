var gulp = require("gulp");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var plumber = require('gulp-plumber');

gulp.task("default", ["jade"], function taskDefault() {
    var watcher = gulp.watch("./index.jade", ["jade"]);
});

// TODO: Task for outputting the template to a single, minified html file
gulp.task("jade", function taskJade(event) {
    return gulp.src("./index.jade")
        .pipe(jade({ pretty: true}))
        .pipe(gulp.dest("./public/"));
});

// TODO: Task for outputting scss to minified css
// TODO: Task for minifying images
