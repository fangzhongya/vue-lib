import type { Options } from 'tsup';

export const tsup: Options = {
    entry: ['./lang/**/*.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: true,
    clean: true,
    shims: false,
};
