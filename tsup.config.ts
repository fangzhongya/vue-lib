import type { Options } from 'tsup';

export function getTsup(entry = 'packages') {
    const tsup: Options = {
        entry: [entry + '/**/*.ts'],
        format: ['cjs', 'esm'],
        dts: true,
        splitting: true,
        clean: true,
        shims: false,
    };
    return tsup;
}

export const tsup = getTsup('src');
