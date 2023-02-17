import { runDev } from '@fangzhongya/create/package';

runDev({
    dir: './dist/',
    dist: 'dist',
    cover: true,
    extensions: ['js'],
    matchexts: [/[\\|\/]index\.js$/],
    nomatchs: [/[\\|\/]src/, /[\\|\/]_virtual/],
    nomatchexts: [/\\chunk-([a-z|A-Z|0-9|-]+)\.js$/],
    exportsIndex: true,
    packageObj: {
        exports: {
            './*': './*',
        },
        typesVersions: {
            '*': {
                '*': ['./dist/*'],
            },
        },
    },
});
