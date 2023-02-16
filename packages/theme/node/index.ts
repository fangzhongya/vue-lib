import { runDev } from '@fangzhongya/create/export/theme';

export const config = {
    dir: './src',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    extensions: ['css', 'scss'],
};

runDev(config);
