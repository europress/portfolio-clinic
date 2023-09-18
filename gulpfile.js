import gulp from "gulp";
// Import project paths
import { dirs, paths } from "./gulp/config/paths.js";
import { plugins } from "./gulp/config/plugins.js"


// Global variables
global.app = {
    devMode: false, //for production set <false>
    dirs: dirs,
    paths: paths,
    gulp: gulp,
    plugins: plugins,
}

const devOff = async function() { global.app.devMode = false } // turn off dev mode

// Import tasks
import { css } from "./gulp/tasks/css.js"
import { html } from "./gulp/tasks/html.js"
import { copy } from "./gulp/tasks/copy.js"
import { clean } from "./gulp/tasks/cleanBuild.js"
import { server } from "./gulp/tasks/server.js"
import { script } from "./gulp/tasks/js.js"
import { image } from "./gulp/tasks/image.js"
import { svgIcons } from "./gulp/tasks/svgIcons.js"
import { font } from "./gulp/tasks/font.js"
import { zip } from "./gulp/tasks/zip.js"


// Watcher
function watch() {
    gulp.watch([paths.watch.files, paths.watch.fonts], copy);
    gulp.watch(paths.watch.css, css);
    gulp.watch(paths.watch.js, script);
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.images, image);
}

// Command tasks 
const build = gulp.parallel(copy, font, image, css, script, html);
const dev = gulp.series(build, gulp.parallel(watch, server));
const prod = gulp.series(devOff, clean, build); 
const prodZip = gulp.series(prod, zip);


gulp.task('default', dev);
gulp.task('prod', prod);
gulp.task('clean', clean);
gulp.task('font', font);
gulp.task('image', image);
gulp.task('svgicons', svgIcons);
gulp.task('prodZip', prodZip);
gulp.task('zip', zip);