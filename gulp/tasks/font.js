import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff from 'ttf2woff'
import ttf2woff2 from 'gulp-ttf2woff2'

export const font = () => {

    // uncomment if source fonts otf or ttf
    // otfToTtf()
    // ttfToWoff()
    // ttf2woff2()

    return app.gulp.src(`${app.paths.src.fonts}**/*.{woff,woff2}`)  // copy woff, woff2 tu build folder
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONT",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.gulp.dest(app.paths.build.fonts))
}


const otfToTtf = () => {
    return app.gulp.src(`${app.paths.src.fonts}**/*.otf`)  // convert otf to ttf
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONT",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(fonter({
        formats: ['ttf']
    }))
    .pipe(app.gulp.dest(app.paths.src.fonts))
}

const ttfToWoff = () => {
    return app.gulp.src(`${app.paths.src.fonts}**/*.ttf`)  // convert ttf to woff & woff2
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONT",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(fonter({
        formats: ['woff']
    }))
    .pipe(app.gulp.dest(app.paths.build.fonts))
    .pipe(app.gulp.src(`${app.paths.src.fonts}**/*.ttf`))
    .pipe(ttf2woff())
    .pipe(app.gulp.dest(app.paths.build.fonts))
}

// Auto compile font.css file from fonts list

// function fontsStyle(params) {

//     const sourceFile = `${app.paths.dirs.src}/css/fonts.css`

//     let file_content = fs.readFileSync(sourceFile)
//     if (file_content == '') {
//         fs.writeFile(sourceFile, '', cb)

//         return fs.readdir(app.paths.build.fonts, function (err, items) {
//             if (items) {
//                 let c_fontname;
//                 for (var i = 0; i < items.length; i++) {
//                     let fontname = items[i].split('.');
//                     fontname = fontname[0];
//                     if (c_fontname != fontname) {
//                         fs.appendFile(sourceFile, '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
//                     }
//                     c_fontname = fontname;
//                 }
//             }
//         })
//     }
// }
    
function cb() { }