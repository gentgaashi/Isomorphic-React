var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    react = require("gulp-react"),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    server = require('gulp-express'),
    karma = require('karma').server;


//functions
var getWatches = function() {
    gulp.watch('app/main.js', ['lint','scripts']);
    gulp.watch('app/components/*.jsx', ['jsx']);
    gulp.watch(['app/sass/*.scss','app/sass/*.sass'],['sass']);
};

gulp.task('lint', function() {
    return gulp.src('app/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function(){
    gulp.src(['app/sass/*.scss','app/sass/*.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'));
    });

gulp.task('scripts', function () {

    gulp.src(['app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/'));

});

gulp.task('jsx', function () {
    return gulp.src('app/components/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('app/components'));
});

gulp.task('coffee', function() {
  gulp.src('./server.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', getWatches);

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('server', function () {
    server.run(['server.js']);
    //getWatches();
    gulp.watch('app/components/*.jsx', ['jsx']);
    gulp.watch(['app/sass/*.scss','app/sass/*.sass'],['sass']);
    gulp.watch(['server.js', 'app/**/*.js'], ['scripts',server.run]);

});

gulp.task('default', ['watch','lint','scripts','test','jsx','sass']);