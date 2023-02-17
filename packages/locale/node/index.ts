import { runDev } from '@fangzhongya/create/export';
import { lineToSmallHump } from '@fangzhongya/utils/name/lineToSmallHump';
runDev({
    dir: './lang/',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    extensions: ['ts'],
    fileFile(_url, _files, _name, wjmc) {
        const mc = wjmc as string;
        return [
            `export { default as ${lineToSmallHump(
                mc,
            )} } from './${mc}';`,
        ];
    },
});
