var     gulp  =   require('gulp'),
        concat = require('gulp-concat'),
        pug = require('gulp-pug'),
        sass = require('gulp-sass'),
        sourcemaps = require('gulp-sourcemaps'),
        img = require('gulp-imagemin'),
        babel = require('gulp-babel'),
        autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

// Task for sass
gulp.task('sass', () => {

    return gulp.src('build/sass/main.sass')
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle:    'compressed'
            }))
            .pipe(autoprefixer('last 2 versions'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css'));
});

// Task for js
gulp.task('js', () => {

    return gulp.src('build/js/*.js')
            .pipe(sourcemaps.init())
            // .pipe(babel({
            //     presets: ['@babel/env']
            // }))
            .pipe(concat('main.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/js'));

});

// Task pug
gulp.task('pug', () => {

    return gulp.src('build/**/*.pug')
            .pipe(pug())
            .pipe(gulp.dest('dist'));

});

// Task images
gulp.task('img', () => {

    return gulp.src('build/img/*')
            .pipe(img())
            .pipe(gulp.dest('dist/img'));

})

// Watch 
gulp.task('watch', () => {
    gulp.watch('build/**/*.pug', gulp.series('pug'));
    gulp.watch('build/sass/**/*.sass', gulp.series('sass'));
    gulp.watch('build/js/*.js', gulp.series('js'));
    gulp.watch('build/img/*', gulp.series('img'));
});