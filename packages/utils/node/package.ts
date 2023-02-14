import { runDev } from '@fangzhongya/create/package';

runDev({
    dir: './packages/',
    cover: true,
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
