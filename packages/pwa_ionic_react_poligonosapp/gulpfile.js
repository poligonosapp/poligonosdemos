
const gulp = require('gulp')
const workboxBuild = require('workbox-build')

gulp.task('service-worker', () => {
    return workboxBuild.generateSW({
        globDirectory: 'build',
        globPatterns: ['**/*.{html,json,js,css}'],
        swDest: 'build/sw.js',
    })
})

// const gulp = require('gulp')
const webpack = require('webpack-stream')
gulp.task('default', function () {
    return gulp
        .src('src/entry.js')
        .pipe(
            webpack({
                // Any configuration options...
            })
        )
        .pipe(gulp.dest('dist/'))
});