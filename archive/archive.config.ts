// document 配置
import { defineConfig } from '@fangzhongya/vue-archive';
import { config } from './config';
import componentsJson from './components.config.json';
const componentsJsonObj = componentsJson as {
    [key: string]: {
        dir: string;
        [key: string]: any;
    };
};
export default defineConfig({
    router: 'document',
    redirect: true,
    // 目前只支持相对的路径
    components: [
        {
            dir: config.dir,
            resolver: componentsJsonObj[config.dir],
            comprops: '/common/props/',
            components: import.meta.glob(
                '../packages/components/**/src/index.(ts|vue)',
            ),
            componentsRaw: import.meta.glob(
                '../packages/components/**/*.(ts|vue)',
                {
                    as: 'raw',
                },
            ),
        },
    ],
    example: {
        dir: '../docs/components/',

        examples: import.meta.glob(
            `../docs/components/**/index.(ts|vue)`,
        ),
        examplesRaw: import.meta.glob(
            '../docs/components/**',
            {
                as: 'raw',
            },
        ),
        md: 'index',
    },
});
