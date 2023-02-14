import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

import { getDts, getOutput } from './node/vite';

const outDir = './dist';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts(getDts('es', outDir)),
        //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        dts(getDts('lib', outDir)),
    ],
    base: './',
    build: {
        target: 'modules',
        //打包文件目录
        outDir: outDir,
        //压缩
        minify: false,
        //css分离
        //cssCodeSplit: true,
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
