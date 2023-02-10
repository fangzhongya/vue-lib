import { runDev } from '@fangzhongya/create/export/vuelib';
import { resolve } from 'node:path';

runDev({
    dir: './packages/components/',
    /**
     * 替换头的完整路径
     */
    dittop: resolve(process.cwd(), './packages'),
    /**
     * 拼接头
     */
    splicetop: 'components',

    utilurl: 'util.ts',

    fileCover: true,

    extensions: ['vue', 'ts'],

    alias: '',

    onlyAlias: false,

    aliass: {},

    matchs: [],

    matchexts: ['/src/index.vue', '/src/index.ts'],
});
