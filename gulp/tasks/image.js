import webp from "gulp-webp"
import imagemin from "gulp-imagemin"

export const image = () => {
    return app.gulp.src(app.paths.src.images)       // build one "webp"
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "IMAGE",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.newer(app.paths.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.paths.build.images))
    .pipe(app.gulp.src(app.paths.src.images))       // build two "minimize"
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ rsolveViewBox: false }],
        interlaced: true,
        optimizationLevel: 3
    }))
    .pipe(app.gulp.dest(app.paths.build.images))
    .pipe(app.gulp.src(app.paths.src.svg))          // build three "svg"
    .pipe(app.plugins.newer(app.paths.build.images))
    .pipe(app.gulp.dest(app.paths.build.images))
    .pipe(app.plugins.browsersync.stream())
} 