import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

import { create } from './build.lib';
const nameArr = Object.keys(create);
function entryFileNames(obj) {
    let name = obj.name;
    name = name.replace(/\.vue$/, '');
    for (let index = 0; index < nameArr.length; index++) {
        const element = nameArr[index];
        if (name.startsWith(element)) {
            const sc = name.replace(
                element,
                create[element],
            );
            return sc + '.js';
        }
    }
    return name + '.js';
}
function beforeWriteFile(name, top) {
    name = name
        .replace(top, '')
        .substring(1)
        .replace(/[\\|\/]/g, '/');
    for (let index = 0; index < nameArr.length; index++) {
        const element = nameArr[index];
        if (name.startsWith(element)) {
            const sc = name.replace(
                element,
                create[element],
            );
            const filePath = join(top, sc);
            return { filePath: filePath };
        }
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts({
            cleanVueFileName: true,
            beforeWriteFile: (filePath) => {
                const top = resolve(__dirname, './dist/es');
                return beforeWriteFile(filePath, top);
            },
            outputDir: resolve(__dirname, './dist/es'),
            //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
            tsConfigFilePath: './tsconfig.json',
        }),
        //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        dts({
            cleanVueFileName: true,
            beforeWriteFile: (filePath) => {
                const top = resolve(
                    __dirname,
                    './dist/lib',
                );
                return beforeWriteFile(filePath, top);
            },
            outputDir: resolve(__dirname, './dist/lib'),
            tsConfigFilePath: './tsconfig.json',
        }),
    ],
    base: './',
    build: {
        // 打包去掉日志与断点
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        target: 'modules',
        //打包文件目录
        outDir: './dist',
        //压缩
        minify: false,
        //css分离
        //cssCodeSplit: true,
        rollupOptions: {
            //忽略打包vue文件
            external: ['vue', 'axios'],
            // input: [],
            output: [
                {
                    format: 'es',
                    //不用打包成.es.js,这里我们想把它打包成.js
                    entryFileNames: entryFileNames,
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: resolve(__dirname, './dist/es'),
                    preserveModulesRoot: 'dist',
                },
                {
                    format: 'cjs',
                    entryFileNames: entryFileNames,
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: resolve(__dirname, './dist/lib'),
                    preserveModulesRoot: 'dist',
                },
            ],
        },
        lib: {
            entry: './packages/index.ts',
            formats: ['es', 'cjs'],
        },
    },
});
