var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
    return gulp
        .src("./sass/index.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"));
});

gulp.task("sass:watch", function() {
    gulp.watch("./sass/**/*.scss", gulp.parallel("sass"));
});
