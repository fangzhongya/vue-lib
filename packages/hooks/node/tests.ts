import { runDev } from '@fangzhongya/create/out/test';
runDev({
    dir: './packages/',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    matchexts: [/(?<![\\|\/]index\.ts)$/],
});
