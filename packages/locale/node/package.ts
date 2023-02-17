import { runDev } from '@fangzhongya/create/package';

runDev({
    dir: './lang/',
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
