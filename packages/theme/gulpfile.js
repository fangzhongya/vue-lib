/**
 * 没有找到好方法解决ts文件运行报错问题
 */

import { resolve } from 'node:path';
import pkg from 'gulp';
const { series, src, dest } = pkg;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

import { readFileSync } from 'node:fs';
const configJson = readFileSync(
    resolve(process.cwd(), '../../config.json'),
);
const comCnfig = JSON.parse(configJson.toString());

const autObj = {};

function compile() {
    const sass = gulpSass(dartSass);
    let go = src(
        resolve(process.cwd(), './packages/**/*.scss'),
    )
        .pipe(sass.sync())
        .pipe(autoprefixer(autObj))
        .pipe(cleanCss());
    if (comCnfig.alias) {
        go = go.pipe(
            rename((path) => {
                path.basename =
                    comCnfig.alias + '-' + path.basename;
            }),
        );
    }
    return go.pipe(
        dest((file) => {
            const nost = './_nodist';
            const dist = './dist';
            if (file && file.contents) {
                const str = file.contents.toString().trim();
                if (str == '@charset "UTF-8";') {
                    return nost;
                }
            }
            return dist;
        }),
    );
}

function copyfont() {
    return src(resolve(process.cwd(), 'packages/fonts/**'))
        .pipe(cleanCss())
        .pipe(dest('./dist/fonts'));
}

function copyfullStyle() {
    return src(resolve(process.cwd(), './dist/**')).pipe(
        dest(resolve(process.cwd(), '../../dist/theme')),
    );
}

export default series(compile, copyfont, copyfullStyle);
