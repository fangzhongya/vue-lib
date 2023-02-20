import { join } from 'node:path';
import { runDev } from '@fangzhongya/create/bins/bil';
import { humpToLine } from '@fangzhongya/utils/name/humpToLine';
import { lineToLargeHump } from '@fangzhongya/utils/name/lineToLargeHump';
import {
    writeInit,
    fsAccess,
    fsReadFile,
} from '@fangzhongya/create/common';

const project = '/vue-lib/packages/';
const components = project + 'components/packages';
const directives = project + 'directives/';
const packages = directives + 'packages';
const template = directives + 'node/template';

const config = {
    dir: './packages/',
    extensions: ['ts'],
    splicetop: '',
    directives: true,
    matchs: [],
    matchexts: [/.+[\\|\/]index\.ts$/],
};

const config2 = {
    dir: './packages/',
    extensions: ['vue', 'ts'],
    splicetop: '',
    matchs: [],
    matchexts: ['/src/index.vue', '/src/index.ts'],
};

/**
 * 判断是否是当前项目
 * @param {*} url
 */
function isCurProject(url) {
    url = url.replace(/\\/g, '/');
    console.log('url', url, packages);
    const iwz = url.indexOf(packages);
    if (iwz > 0) {
        const te = url.substring(0, iwz);
        return {
            p: join(te + packages),
            t: join(te + template),
            d: join(te + components),
        };
    } else {
        console.log(
            '不在当前要创建的项目中请进入项目中再执行',
        );
        return false;
    }
}

function update(url, ml, gx) {
    console.log('update', url, ml, gx);
}

function getMLz(v) {
    const obj = {};
    Object.keys(v).forEach((k) => {
        const z = v[k];
        obj[z.name] = z.url;
    });
    return obj;
}

const dx = 'TempLate';

function addFile(url, ml, turl, type, Fang) {
    const turlt = join(turl, type);
    const wz = join(url, ml);
    fsAccess(turlt).then(async (is) => {
        if (is) {
            await writeInit(turlt, (url, readdir) => {
                if (
                    readdir.file &&
                    readdir.file.length > 0
                ) {
                    readdir.file.forEach(async (k) => {
                        const wjdz = join(url, k);
                        let text = await fsReadFile(wjdz);
                        text = text.replaceAll(
                            dx,
                            lineToLargeHump(ml),
                        );

                        const dz = wjdz.replace(turlt, '');
                        await Fang.fileOpen(
                            join(wz, dz),
                            text,
                        );
                    });
                }
            });
        } else {
            console.log(
                `你选择的模板 ${type} 不存在，请重新选择`,
                turl,
            );
        }
    });
}

async function add(url, ml, type = 'type1') {
    const turl = isCurProject(url);
    if (turl) {
        config.dir = turl.p;
        const Fang = await runDev(config);
        const v = getMLz(Fang.getLibObj());
        const mlurl = v[ml];
        if (mlurl) {
            console.log(
                `${ml} 已经存在指令库中，请重新命名。`,
                mlurl,
            );
        } else {
            config2.dir = turl.d;
            config2.dittop = turl.d;
            const dobj = (
                await runDev(config2)
            ).getLibObj();
            const v = getMLz(dobj);
            const mlurl = v[ml];
            if (mlurl) {
                console.log(
                    `${ml} 已经存在组件库中，请重新命名。`,
                    mlurl,
                );
            } else {
                addFile(url, ml, turl.t, type, Fang);
            }
        }
    }
}

export { add, update };
