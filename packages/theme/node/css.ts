import { runDev } from '@fangzhongya/create/out/theme';
// import { filter } from '../../components/node/catalogue-filter';
// import { config as comCnfig } from '../../../config';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
const configJson = readFileSync(
    resolve(process.cwd(), '../../config.json'),
);
const comCnfig = JSON.parse(configJson.toString());

const filterJson = readFileSync(
    resolve(process.cwd(), '../../catalogue-filter.json'),
);
const filter = JSON.parse(filterJson.toString());

runDev({
    dir: '../components/packages',
    outDir: './src',
    alias: comCnfig.alias,
    filter: comCnfig.commerge ? filter : undefined,
    coverConfig: true,
    fileCover: true,
    writeNotes: true,
});
