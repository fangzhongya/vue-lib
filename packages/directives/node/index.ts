import { runDev } from '@fangzhongya/create/export';
import { lineToLargeHump } from '@fangzhongya/utils/name/lineToLargeHump';

import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
const configJson = readFileSync(
    resolve(process.cwd(), '../../config.json'),
);
const comCnfig = JSON.parse(configJson.toString());

runDev({
    dir: './packages/',
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
    extensions: ['ts'],
    fileDirs(_url, _files, name) {
        const mc = name as string;
        let bmc = mc;
        if (comCnfig.alias) {
            bmc = comCnfig.alias + '-' + mc;
        }
        return [
            `export { default as ${lineToLargeHump(
                bmc,
            )} } from './${mc}';`,
        ];
    },
});
