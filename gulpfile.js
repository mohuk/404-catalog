// Include gulp
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'app/'
    });
});
gulp.task('default', ['connect']);
