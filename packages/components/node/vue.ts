import { runDev } from '@fangzhongya/create/export/vuelib';
import { resolve } from 'node:path';
// import { config as comCnfig } from '../../../config';
import { readFileSync } from 'node:fs';
const configJson = readFileSync(
    resolve(process.cwd(), '../../config.json'),
);
const comCnfig = JSON.parse(configJson.toString());

const dittop = resolve(process.cwd(), './packages/');

export const config = {
    dir: './packages/',
    /**
     * 替换头的完整路径
     */
    dittop: dittop,

    liburl: resolve(
        process.cwd(),
        '../../catalogue-filter.json',
    ),
    /**
     * 拼接头
     */
    splicetop: '',

    utilurl() {
        return '@fangzhongya/vue-lib-utils';
    },

    coverConfig: true,
    fileCover: true,
    writeNotes: true,

    extensions: ['vue', 'ts'],

    alias: comCnfig.alias || '',

    onlyAlias: false,

    aliass: {},

    matchs: [],

    matchexts: ['/src/index.vue', '/src/index.ts'],
};

runDev(config);
