module.exports = function (){
  $.gulp.task('styles', function(){
    return $.gulp.src('source/main.scss')
      .pipe($.plumber())
      .pipe($.sass())
      .pipe($.gulp.dest('build/css/'))
      .pipe($.bs.reload({stream:true}))
    ;
  });
}

//gulp styles