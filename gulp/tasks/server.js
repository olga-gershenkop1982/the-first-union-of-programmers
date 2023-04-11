module.exports = function (){
  $.gulp.task('server', function() {
    $.bs.init({
      server: {
        baseDir: 'build',
        directory: true
      },
      browser: ["chrome", "firefox"]
    });
    $.gulp.watch('source/**/*.pug', $.gulp.series('html:main'));
    $.gulp.watch('source/**/*.pug', $.gulp.series('html:inner'));
    $.gulp.watch('source/**/*.{scss,sass}', $.gulp.series('styles'));
    $.gulp.watch('source/**/*.{scss,sass}', $.gulp.series('fonts'));
    $.gulp.watch('source/fonts/**/*.{woff,woff2}', $.gulp.series('fonts:copy'));
    $.gulp.watch('source/**/*.{jpg,png,svg}', $.gulp.series('images:copy'));
  });
}

//gulp server