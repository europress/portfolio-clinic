import replace from "gulp-replace" //find & replace
import plumber from "gulp-plumber" // catch errors
import notify from "gulp-notify" //system os notify
import browsersync from "browser-sync" // html server
import newer from "gulp-newer" // check updates

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    newer: newer,
    browsersync: browsersync,
}