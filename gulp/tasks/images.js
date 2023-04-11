module.exports = function (){
  $.gulp.task('images:copy', function (){
    return $.gulp.src(
      [
        'source/blocks/mains/**/*.{jpg,png,svg}',
        'source/blocks/generals/**/*.{jpg,png,svg}',
        'source/blocks/inners/**/*.{jpg,png,svg}'
      ])
      .pipe($.gulp.dest('build/img/'))
      .pipe($.bs.reload({stream:true}))
  });
}

//gulp images:copy