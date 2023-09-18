const cssPreprocessor = 'sass'

export const dirs = {
    src: './src',
    dest: './build',
}


export const paths = {
    build: {
        js: `${dirs.dest}/js/`,
        images: `${dirs.dest}/assets/img/`,
        css: `${dirs.dest}/css/`,
        html: `${dirs.dest}/`,
        files: `${dirs.dest}/assets/files/`,
        fonts: `${dirs.dest}/assets/fonts/`,
    },
    src: {
        js: `${dirs.src}/js/**/*.js`,
        images: `${dirs.src}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${dirs.src}/assets/img/**/*.svg`,
        svgIcons: `${dirs.src}/assets/img/svgIcons/**/*.svg`,
        css: [`${dirs.src}/css/*.css`, `${dirs.src}/css/**/*.${cssPreprocessor}`],
        html: `${dirs.src}/html/*.html`,
        files: `${dirs.src}/assets/files/**/*.*`,
        fonts: `${dirs.src}/assets/fonts/`,
    },
    watch: {
        js: `${dirs.src}/js/**/*.js`,
        images: `${dirs.src}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${dirs.src}/assets/img/**/*.svg`,
        css: [`${dirs.src}/css/*.css`, `${dirs.src}/css/*.${cssPreprocessor}`],
        html: `${dirs.src}/html/**/*.html`,
        files: `${dirs.src}/assets/files/**/*.*`,
        fonts: `${dirs.src}/assets/fonts/**/*.*`,
    },
    clean: dirs.dest,
    dest: dirs.dest,
    scr: dirs.src,
    root: dirs.projectFolder,
    ftp: ``,
}