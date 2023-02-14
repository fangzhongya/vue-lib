import { runDev } from '@fangzhongya/create/export/vuelib';
import { resolve } from 'node:path';

export const config = {
    dir: './packages/',
    /**
     * 替换头的完整路径
     */
    dittop: resolve(process.cwd(), './packages/'),

    liburl: resolve(process.cwd(), './node/build.lib.ts'),
    /**
     * 拼接头
     */
    splicetop: '',

    utilurl() {
        return '@fangzhongya/vue-lib-utils/install';
    },

    coverConfig: true,
    fileCover: true,
    writeNotes: true,

    extensions: ['vue', 'ts'],

    alias: '',

    onlyAlias: false,

    aliass: {},

    matchs: [],

    matchexts: ['/src/index.vue', '/src/index.ts'],
};

runDev(config);
