/**
 * 没有找到好方法解决ts文件运行报错问题
 */

import { resolve } from 'path';
import pkg from 'gulp';
const { series, src, dest } = pkg;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

const autObj = {};

function compile() {
    const sass = gulpSass(dartSass);
    return src(resolve(process.cwd(), './src/**/*.scss'))
        .pipe(sass.sync())
        .pipe(autoprefixer(autObj))
        .pipe(cleanCss())
        .pipe(dest('./dist'));
}

function copyfont() {
    return src(resolve(process.cwd(), 'src/fonts/**'))
        .pipe(cleanCss())
        .pipe(dest('./dist/fonts'));
}

// function copyfullStyle() {
//     return src(resolve(process.cwd(), './dist/**')).pipe(
//         dest(
//             resolve(
//                 process.cwd(),
//                 '../../dist/theme-chalk',
//             ),
//         ),
//     );
// }

export default series(compile, copyfont);
