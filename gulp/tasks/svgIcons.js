import svgSprite from "gulp-svg-sprite"

export const svgIcons = () => {
    return app.gulp.src(app.paths.src.svgIcons)       // build one "webp"
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SVG-SPRITE",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../icons/icons.svg',
                example: app.devMode ? true : false
            }
        }
    }))
    .pipe(app.plugins.replace(/\-svgrepo\-com\,/g, '')) // delete source download site info
    .pipe(app.gulp.dest(app.paths.build.images))
}