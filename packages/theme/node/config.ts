import { runDev } from '@fangzhongya/create/out/index';
// import { filter } from '../../components/node/catalogue-filter';
// import { config as comCnfig } from '../../../config';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
const configJson = readFileSync(
    resolve(process.cwd(), '../../config.json'),
);
const comCnfig = JSON.parse(configJson.toString());

runDev({
    dir: './common',
    outDir: './common',
    matchexts: [/[\/|\\]config.scss$/],
    gene(_name, url) {
        return resolve(url, 'config.scss');
    },
    alias: comCnfig.alias,
    coverConfig: true,
    read: true,
    fileCover: true,
    writeNotes: false,
    fileSet(_url, _name, text) {
        text = text.replace(
            /\$alias\s*\:(.*);/,
            `$alias: '${comCnfig.alias}';`,
        );
        console.log('fileSet', _url, _name, text);
        return [text];
    },
});
