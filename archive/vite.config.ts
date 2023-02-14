import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { config } from './config';
import { ComponentsResolverArchive } from '@fangzhongya/vue-components/archive';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            dirs: [],
            dts: true,
            resolvers: [ComponentsResolverArchive(config)],
        }),
    ],
    base: './',
    build: {},
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
    server: {
        host: '0.0.0.0', // 可以外部访问
        hmr: true, // 开启热更新
    },
});
