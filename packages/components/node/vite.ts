import { create } from './build.lib';
import { resolve, join } from 'path';

const config = {
    splicetop: '',
};

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
const createObj: ObjStr = create;

const nameArr = Object.keys(create);

function entryFileNames(obj: PreRenderedChunk, type) {
    let name = obj.name;
    let hz = type == 'es' ? 'js' : 'cjs';
    if (name != 'index') {
        name = name.replace(/\.vue$/, '');
        for (
            let index = 0;
            index < nameArr.length;
            index++
        ) {
            const element = nameArr[index];
            if (name.startsWith(element)) {
                const sc = name.replace(
                    element,
                    createObj[element],
                );
                return sc + '.' + hz;
            }
        }
    }
    return name + '.' + hz;
}

function assetFileNames(obj) {
    let name = obj.name;
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
        config.splicetop + '/index.d.ts',
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
                createObj[nameArr[index]] + '/'
            ).replace(reg, '');
            content = content.replace(element, key);
        }
        return { filePath: name, content };
    } else {
        name = name
            .replace(top, '')
            .substring(1)
            .replace(/[\\|\/]/g, '/');
        for (
            let index = 0;
            index < nameArr.length;
            index++
        ) {
            const element = nameArr[index];
            if (name.startsWith(element)) {
                const sc = name.replace(
                    element,
                    createObj[element],
                );
                const filePath = join(top, sc);
                return { filePath: filePath };
            }
        }
    }
}

export function getDts(dist: string) {
    const top = resolve(process.cwd(), dist);
    return {
        cleanVueFileName: true,
        // skipDiagnostics: true,
        beforeWriteFile: (
            filePath: string,
            content: string,
        ) => {
            const top = resolve(process.cwd(), dist);
            return beforeWriteFile(filePath, top, content);
        },
        outputDir: top,
        //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: './tsconfig.json',
    };
}
export function getOutput(
    type: ModuleFormat,
    outDir: string,
) {
    return {
        format: type,
        //不用打包成.es.js,这里我们想把它打包成.js
        entryFileNames: (obj) => {
            return entryFileNames(obj, type);
        },
        assetFileNames: assetFileNames,
        // entryFileNames: '[name].js',
        //让打包目录和我们目录对应
        preserveModules: true,
        //配置打包根目录
        dir: outDir,
    };
}
