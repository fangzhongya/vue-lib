import { runDev } from '@fangzhongya/create/package';

runDev({
    dir: './packages/',
    cover: true,
    packageObj: {
        files: ['*.d.ts'],
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
