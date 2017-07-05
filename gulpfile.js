const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    gulp.src('public/assets/sass/**/*.scss') //path
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});


//Main watch task
gulp.task('default', () =>{
    gulp.watch('public/assets/sass/**/*.scss',['sass']);
});