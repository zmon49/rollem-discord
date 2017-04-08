var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var watch = require('gulp-watch')
var jasmine = require('gulp-jasmine')

gulp.task('watch', function() {
  var filesForTest = ['**/*.js', 'spec/*.js']
  return gulp.src(filesForTest)
    .pipe(watch(filesForTest))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('jasmine', function() {
  gulp.src('spec/*.js')
      .pipe(jasmine())
});

gulp.task('watch', function () {
  var filesForTest = ['**/*.js', 'spec/*.js']
  gulp.watch(filesForTest, function(event) {
    gulp.run('jasmine');
  });
});