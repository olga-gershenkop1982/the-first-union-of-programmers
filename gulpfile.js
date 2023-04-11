global.$ = {
  gulp: require('gulp'),
  bs: require('browser-sync').create(),
  pug: require('gulp-pug'),
  sass: require('gulp-sass')(require('sass')),
  plumber: require('gulp-plumber'),
  rename: require('gulp-rename'),
  del: require('del'),

  path: {tasks: require('./gulp/config/tasks.js')}
};

$.path.tasks.forEach(function (taskPath){
  require(taskPath)();
});

$.gulp.task('clean', function(){
  return $.del('build');
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel('html:main', 'html:inner', 'styles', 'fonts', 'fonts:copy', 'images:copy'),
  'server'
));

//gulp


//$.gulp.parallel('html:main', 'styles', 'images', 'copy'),
//$.gulp.parallel('html:main', 'html:inner', 'styles', 'images', 'fonts', 'fonts:copy'),

// $.gulp.task('copy', function () {
//     return $.gulp.src([
//         'source/fonts/**/*.{woff,woff2}',
//         'source/img/**',
//         'source/js/**'
//     ], {base: 'source'})
//         .pipe($.gulp.dest('build'))
//         ;
// });