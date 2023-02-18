import { runDev } from '@fangzhongya/create/export';
import { lineToSmallHump } from '@fangzhongya/utils/name/lineToSmallHump';
runDev({
    dir: './packages/',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    extensions: ['ts'],
    nomatchexts: [/[\\|\/]type.ts$/],
    fileFile(_url, _files, _name, wjmc) {
        const mc = wjmc as string;
        return [
            `export { default as ${lineToSmallHump(
                mc,
            )} } from './${mc}';`,
        ];
    },
});
