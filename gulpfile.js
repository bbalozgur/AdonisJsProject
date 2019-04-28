var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

 
const paths = {
    nodePath : 'public',
    stylesPath : 'assets/scss',
    jsPath : 'assets/js'
}

gulp.task('styles',function(){
    return gulp.src([
        paths.nodePath + '/style.css',
        paths.stylesPath + '/**/*.scss'
    ])
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        })
    )
    .pipe(
        autoprefixer ({
            browsers : ['last 2 versions'],
            cascade: false
        })
    )
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'))
    
})


gulp.task('default',function(){
	console.log('Default task running');
});