var gulp = require("gulp");
//var sass = require("gulp-sass");
var jade = require("gulp-jade");
var plumber = require("gulp-plumber");
var serve = require("gulp-serve");

var directories = {
    src: {
        jade: ["src/templates/index.jade"],
        javascript: ["src/scripts/main.js"]
    },
    dest: {
        jade: "public",
        javascript: "public/static/scripts/"
    }
};

gulp.task("default", ["jade", "scripts"], function taskDefault() {
    gulp.watch(directories.src.jade, ["jade"]);
    gulp.watch(directories.src.javascript, ["scripts"]);
});

// TODO: Task for outputting the template to a single, minified html file
gulp.task("jade", function taskJade() {
    return gulp.src(directories.src.jade)
        .pipe(plumber())
        .pipe(jade({ pretty: true}))
        .pipe(gulp.dest(directories.dest.jade));
});

// TODO: Compile javascript
gulp.task("scripts", function taskScripts() {
    return gulp.src(directories.src.javascript)
        .pipe(plumber())
        .pipe(gulp.dest(directories.dest.javascript));
});

gulp.task("serve", serve("public"));

// TODO: Task for outputting scss to minified css
// TODO: Task for minifying images
