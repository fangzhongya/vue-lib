import { runDev } from '@fangzhongya/create/export/theme';

export const config = {
    dir: './src',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    extensions: ['css', 'scss'],
    fileTop() {
        return [`@use 'sass:map';`];
    },
    topUrl: ['../common/config.scss'],
};

runDev(config);
