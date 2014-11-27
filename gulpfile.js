var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var order = require('gulp-order');

var config = { 
  jsPath:   './resources/js', 
  sassPath: './resources/sass', 
  bowerDir: './bower_components'
};

// publish awesome fonts in public folder
gulp.task('icons', function() {
  return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
    .pipe(gulp.dest('./public/fonts'));
});

// compile Saas files and publish the resulting css in public folder 
gulp.task('css', function() {
  return gulp.src(config.sassPath + '/style.scss')
  .pipe(sass({
    errLogToConsole: true,
    includePaths: [
       config.sassPath,
       config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
       config.bowerDir + '/fontawesome/scss'
    ]
   }) .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))) 
  .pipe(autoprefix('last 2 version'))
  .pipe(gulp.dest('./public/css')); 
});

// concatenate all libs and app code into one file (not re-uglifying libs, for speed)
gulp.task('js', function() {
  return merge(
    gulp.src([
        config.bowerDir + '/jquery/dist/jquery.min.js',
        config.bowerDir + '/bootstrap-sass-official/assets/javascripts/bootstrap.js',
        config.bowerDir + '/handlebars/handlebars.min.js',
        config.bowerDir + '/ember/ember.min.js',
        config.bowerDir + '/ember-data/ember-data.js'
      ])
      .pipe(concat('libs.tmp')),
    gulp.src([
        config.jsPath + '/application.js',
        config.jsPath + '/router.js'
      ])
      .pipe(uglify('app.tmp'))
    )
    .pipe(order(['libs.tmp', 'app.tmp']))
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./public/js'));
});

// watch for changes in Saas or Javascript files
 gulp.task('watch', function() {
   gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
  gulp.watch(config.jsPath   + '/**/*.js',   ['js']); 
});

  gulp.task('default', ['icons', 'css', 'js']);