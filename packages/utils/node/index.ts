import { runDev } from '@fangzhongya/create/export/utils';
runDev({
    dir: './packages/',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    extensions: ['ts'],
    merge: [],
});
