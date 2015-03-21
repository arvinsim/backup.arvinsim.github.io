var gulp = require("gulp");
var plumber = require("gulp-plumber");
var serve = require("gulp-serve");

var jade = require("gulp-jade");
var sass = require("gulp-sass");
var image = require("gulp-image");

var directories = {
    src: {
        jade: ["src/templates/index.jade"],
        scripts: ["src/scripts/main.js"],
        styles: ["src/scss/main.scss"],
        images: ["src/images/**/*.png"]
    },
    dest: {
        jade: "public",
        scripts: "public/static/scripts/",
        styles: "public/static/css/",
        images: "public/static/images"
    },
    watch: {
        jade: ["src/templates/**/*.jade"],
        scripts: ["src/scripts/**/*.js"],
        styles: ["src/scss/**/*.scss"],
        images: ["src/images/**/*.png"]
    },
};

gulp.task("default", ["jade", "scripts", "styles", "images"], function taskDefault() {
    gulp.watch(directories.watch.jade, ["jade"]);
    gulp.watch(directories.watch.scripts, ["scripts"]);
    gulp.watch(directories.watch.styles, ["styles"]);
    gulp.watch(directories.watch.images, ["images"]);
});

gulp.task("serve", serve("public"));

// Task for outputting the template to a single, minified html file
gulp.task("jade", function taskJade() {
    return gulp.src(directories.src.jade)
        .pipe(plumber())
        .pipe(jade({ pretty: true}))
        .pipe(gulp.dest(directories.dest.jade));
});

// Task to compile javascript into one file
// TODO: Compile and minify javascript
gulp.task("scripts", function taskScripts() {
    return gulp.src(directories.src.scripts)
        .pipe(plumber())
        .pipe(gulp.dest(directories.dest.scripts));
});

// Task for outputting scss to css
// TODO: Minify
gulp.task("styles", function taskStyles() {
    return gulp.src(directories.src.styles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(directories.dest.styles));
});

// TODO: Task for minifying images
gulp.task("images", function taskImages() {
    gulp.src(directories.src.images)
        .pipe(plumber())
        .pipe(image())
        .pipe(gulp.dest(directories.dest.images));
});
