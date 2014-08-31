var gulp = require('gulp'),
    del = require('del');;

var paths = {
    scripts: ['!./node_modules', '!./node_modules/**/*', '!./build', './**/*'],
    build: ['!./build/.git/**/*', './build/**/*']
};

gulp.task('clean', function(cb) {
    del(paths.build, cb);
});

gulp.task('build', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(gulp.dest('./build/'));
});
