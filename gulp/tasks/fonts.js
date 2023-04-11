module.exports = function (){
  $.gulp.task('fonts', function(){
    return $.gulp.src('source/globals/fonts.scss')
      .pipe($.rename('css/fonts.css'))
      .pipe($.gulp.dest('build/'))
      .pipe($.bs.reload({stream:true}))
    ;
  });

  $.gulp.task('fonts:copy', function(){
    return $.gulp.src('source/fonts/**/*.{woff,woff2}')
      .pipe($.gulp.dest('build/fonts/'))
      .pipe($.bs.reload({stream:true}))
    ;
  });
}

//gulp fonts