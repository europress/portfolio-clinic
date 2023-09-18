import * as nodePath from 'path';

const projectName = nodePath.basename(nodePath.resolve());

import zipPlugin from 'gulp-zip'

export const zip = () => {
    console.log(`${app.dirs.dest}/**/*.*`)
    console.log(projectName)

    return app.gulp.src(`${app.dirs.dest}/**/*.*`)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "ZIP",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(zipPlugin(`${projectName}.zip`))
    .pipe(app.gulp.dest('./'))
}