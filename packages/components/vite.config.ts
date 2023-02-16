import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

import { getDts, getOutput } from './node/vite';

const outDir = './dist';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts(getDts(outDir))],
    base: './',
    build: {
        target: 'modules',
        //打包文件目录
        outDir: outDir,
        //压缩
        minify: false,
        //css分离
        // vite 代码有问题，没有给出完整的路径，所以无法解析
        cssCodeSplit: true,
        rollupOptions: {
            //忽略打包vue文件
            external: [
                'vue',
                'axios',
                /^@fangzhongya\/vue-lib-utils.*/,
            ],
            // input: [],
            output: [
                getOutput('es', outDir),
                getOutput('cjs', outDir),
            ],
        },
        lib: {
            entry: './packages/index.ts',
        },
    },
});
