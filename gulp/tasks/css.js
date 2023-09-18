import * as dartSass from "sass"
import gulpSass from "gulp-sass"
import concat from "gulp-concat"


import cleanCss from "gulp-clean-css"
import webpcss from "gulp-webpcss"
import autprefixer from "gulp-autoprefixer"
import groupCssMediaQueries from "gulp-group-css-media-queries"
import autoPrefixer from "gulp-autoprefixer"


const sass = gulpSass(dartSass)

export const css = () => {
    return app.gulp.src(app.paths.src.css, { sourcemaps: app.devMode })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "CSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../assets/img/'))
    .pipe(sass({
        outputStyle: app.devMode ? 'expanded' : 'compressed'
    }))
    .pipe(concat('style.min.css')) 
    .pipe(webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
    }))
    .pipe(autoPrefixer({
        grid: true,
        ovverideBrowserlist: ["last 3 versions"],
        cascade: true
    }))
    .pipe(cleanCss())
    .pipe(app.gulp.dest(app.paths.build.css))
    .pipe(app.plugins.browsersync.stream())
}