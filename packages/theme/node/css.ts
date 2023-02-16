import { runDev } from '@fangzhongya/create/out/theme';
runDev({
    dir: '../components/packages',
    outDir: './src',
    coverConfig: false,
    fileCover: false,
    writeNotes: true,
});
