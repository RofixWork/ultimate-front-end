var gulp = require("gulp"),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  concat = require("gulp-concat"),
  minify = require("gulp-minify"),
  sass = require("gulp-sass")(require("sass")),
  sourcemaps = require("gulp-sourcemaps"),
  notify = require("gulp-notify"),
  autoprefixer = require("gulp-autoprefixer");

gulp.task("html", function () {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(livereload());
});

gulp.task("css", function () {
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

gulp.task("js", function () {
  return gulp
    .src("stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/**/*.pug", gulp.series(["html"]));
  gulp.watch(
    ["stage/css/**/*.css", "stage/css/**/*.scss"],
    gulp.series(["css"])
  );
  gulp.watch("stage/js/*.js", gulp.series(["js"]));
});
