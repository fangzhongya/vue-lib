import { resolve, join } from 'node:path';

// import { filter } from './catalogue-filter';
import { readFileSync } from 'node:fs';
const configJson = readFileSync(
    resolve(process.cwd(), './config.json'),
);
const comCnfig = JSON.parse(configJson.toString());

const filterJson = readFileSync(
    resolve(process.cwd(), './catalogue-filter.json'),
);
const filter = JSON.parse(filterJson.toString());

const config = {
    splicetop: '',
};

export interface PreRenderedAsset {
    name: string | undefined;
    source: string | Uint8Array;
    type: 'asset';
}

export type InternalModuleFormat =
    | 'amd'
    | 'cjs'
    | 'es'
    | 'iife'
    | 'system'
    | 'umd';

export type ModuleFormat =
    | InternalModuleFormat
    | 'commonjs'
    | 'esm'
    | 'module'
    | 'systemjs';

export interface PreRenderedChunk {
    exports: string[];
    facadeModuleId: string | null;
    isDynamicEntry: boolean;
    isEntry: boolean;
    isImplicitEntry: boolean;
    moduleIds: string[];
    name: string;
    type: 'chunk';
}
type ObjStr = { [key: string]: string };

const filterObj: ObjStr = comCnfig.commerge ? filter : {};

const nameArr = Object.keys(filter);

function entryFileNames(
    obj: PreRenderedChunk,
    type: string,
) {
    let name = obj.name;
    let hz = type == 'es' ? 'js' : 'cjs';
    if (name == 'packages/components/index') {
        name = 'index';
    } else if (name != 'index') {
        name = name.replace(/\.vue$/, '');
        name = name
            .replace(/^packages[\\|\/]/, '')
            .replace(/[\\|\/]packages[\\|\/]/, '/');
        for (
            let index = 0;
            index < nameArr.length;
            index++
        ) {
            const element = nameArr[index];
            if (name.startsWith('components/' + element)) {
                const sc = name.replace(
                    element,
                    filterObj[element],
                );
                return sc + '.' + hz;
            }
        }
    }
    return name + '.' + hz;
}

function assetFileNames(obj: PreRenderedAsset) {
    let name = obj.name || '';
    const reg =
        /^.*\/([^\/]*)\/src\/([^\/]*).vue(\?.*)?.[css|scss]$/;
    const re = reg.exec(name);
    if (re && re.length > 0) {
        if (re[2] == 'index') {
            name = re[1] + '/index.css';
        } else {
            name = re[1] + '/' + re[2] + '.css';
        }
        return name;
    } else {
        return 'index.css';
    }
}

const reg = new RegExp('^' + config.splicetop);
function beforeWriteFile(
    name: string,
    top: string,
    content: string,
) {
    const indexUrl = join(
        top,
        config.splicetop +
            '/components/packages/index.d.ts',
    );
    if (name == indexUrl) {
        for (
            let index = 0;
            index < nameArr.length;
            index++
        ) {
            const element = (nameArr[index] + '/').replace(
                reg,
                '',
            );
            const key = (
                filterObj[nameArr[index]] + '/'
            ).replace(reg, '');
            content = content.replace(element, key);
        }
        return {
            filePath: join(
                top,
                config.splicetop + '/components/index.d.ts',
            ),
            content,
        };
    } else {
        name = name
            .replace(top, '')
            .substring(1)
            .replace(/[\\|\/]/g, '/')
            .replace(/^packages[\\|\/]/, '')
            .replace(/[\\|\/]packages[\\|\/]/, '/');

        for (
            let index = 0;
            index < nameArr.length;
            index++
        ) {
            const element = nameArr[index];
            if (name.startsWith('components/' + element)) {
                const sc = name.replace(
                    element,
                    filterObj[element],
                );
                const filePath = join(top, sc);
                return { filePath: filePath };
            }
        }
        return { filePath: join(top, name) };
    }
}

export function getDts(dist: string) {
    const top = resolve(process.cwd(), dist);
    return {
        cleanVueFileName: true,
        exclude: ['**/node_modules/**', '**/dist/**'],
        // skipDiagnostics: true,
        beforeWriteFile: (
            filePath: string,
            content: string,
        ) => {
            const top = resolve(process.cwd(), dist);
            return beforeWriteFile(filePath, top, content);
        },
        outputDir: top,
        //???????????????tsconfig.json????????????????????????????????????,???????????????,???????????????components?????????tsconfig.json
        tsConfigFilePath: './tsconfig.json',
    };
}
export function getOutput(
    type: ModuleFormat,
    outDir: string,
) {
    return {
        format: type,
        //???????????????.es.js,??????????????????????????????.js
        entryFileNames: (obj: PreRenderedChunk) => {
            return entryFileNames(obj, type);
        },
        assetFileNames: assetFileNames,
        // entryFileNames: '[name].js',
        //????????????????????????????????????
        preserveModules: true,
        //?????????????????????
        dir: outDir,
    };
}
