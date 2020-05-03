// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass");

// a task to generate the css with sass
gulp.task("css", function() {
  return gulp
    .src("./src/scss/freelancer.scss")
    .pipe(
      sass({
        outputStyle: "compact"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./_includes/assets/css"));
});

/* Watch folders for changess */
gulp.task("watch", function() {
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("css"));
});

gulp.task("build", gulp.parallel("css"));

gulp.task("default", gulp.parallel("css"));