import webpack from "webpack-stream"

export const script = () => {
    return app.gulp.src(app.paths.src.js, { sourcemaps: app.devMode })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(webpack({
        mode: app.devMode ? 'development' : 'production',
        output: {
            filename: "app.min.js"
        }
    }))
    .pipe(app.gulp.dest(app.paths.build.js))
    .pipe(app.plugins.browsersync.stream())
} 