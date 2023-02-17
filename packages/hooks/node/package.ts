import { runDev } from '@fangzhongya/create/package';

runDev({
    dir: './packages/',
    cover: true,
    upversion: true,
    exportsIndex: true,
    packageObj: {
        files: [],
        typesVersions: {
            '*': {
                '*': ['./dist/*'],
            },
        },
        exports: {
            './*': './*',
        },
    },
});
