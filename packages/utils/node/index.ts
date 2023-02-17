import { runDev } from '@fangzhongya/create/export';
runDev({
    dir: './packages/',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    extensions: ['ts'],
    merge: [],
});
