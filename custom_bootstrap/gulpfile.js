var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
    return gulp
        .src("./sass/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
    gulp.watch("./sass/**/*.scss", gulp.parallel("sass"));
});
