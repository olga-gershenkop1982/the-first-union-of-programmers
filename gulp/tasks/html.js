module.exports = function (){
  $.gulp.task('html:main', function(){
    return $.gulp.src('source/index.pug')
      .pipe($.plumber())
      .pipe($.pug({pretty:true}))
      .pipe($.gulp.dest('build'))
      .on('end', $.bs.reload)
    ;
  });

  $.gulp.task('html:inner', function(){
    return $.gulp.src(
      [
        'source/pages/inners/1с-solutions/sell.pug',
        'source/pages/inners/1с-solutions/integration.pug',
        'source/pages/inners/1с-solutions/rework.pug',
        'source/pages/inners/1с-solutions/rent.pug',
        'source/pages/inners/1с-solutions/services-sets.pug',
        'source/pages/inners/1с-solutions/escort.pug',
        'source/pages/inners/partner-solutions/bitrix-24.pug',
        'source/pages/inners/partner-solutions/data-mobile.pug',
        'source/pages/inners/partner-solutions/mobi-с.pug',
        'source/pages/inners/services/commercial-equipment.pug',
        'source/pages/inners/services/lan-installation.pug',
        'source/pages/inners/services/accounting-service.pug',
        'source/pages/inners/services/video-system.pug',
        'source/pages/inners/services/audio-system.pug'
      ])
      .pipe($.plumber())
      .pipe($.pug({pretty:true}))
      .pipe($.gulp.dest('build'))
      .on('end', $.bs.reload);
  });
}

//gulp html:main
//gulp html:inner