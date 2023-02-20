import { useGlobalConfig } from '../global-config';

import { DefaultConfig } from '@fangzhongya/vue-lib-utils';

const defaultNamespace = DefaultConfig.alias;

const statePrefix = 'is';

function getClassName(
    //前缀
    cssname: string,
    // 组件名称
    block: string,
    // 子样式名称
    blockSuffix: string,

    // 下标样式 __
    element: string,

    // 后缀样式 --
    modifier: string,
): string {
    let cls = '';
    if (cssname) {
        cls = `${cssname}-`;
    }
    cls += block;
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
}

export const useCssName = (block: string) => {
    const cssname = useGlobalConfig(
        'cssname',
        defaultNamespace,
    );
    // 设置组件和子样式
    const z = (
        blockSuffix = '',
        element = '',
        modifier = '',
    ) =>
        getClassName(
            cssname.value,
            block,
            blockSuffix,
            element,
            modifier,
        );

    const is = (name: string, state?: boolean) => {
        return name && state!
            ? `${statePrefix}${name}`
            : '';
    };

    const vo = (object: Record<string, string>) => {
        const styles: Record<string, string> = {};
        for (const key in object) {
            if (object[key]) {
                styles[`--${cssname.value}-${key}`] =
                    object[key];
            }
        }
        return styles;
    };

    const vdo = (object: Record<string, string>) => {
        const styles: Record<string, string> = {};
        for (const key in object) {
            if (object[key]) {
                styles[
                    `--${cssname.value}-${block}-${key}`
                ] = object[key];
            }
        }
        return styles;
    };

    const vm = (name: string) =>
        `--${cssname.value}-${name}`;
    const vdm = (name: string) =>
        `--${cssname.value}-${block}-${name}`;

    return {
        name: cssname,
        z,
        is,
        vo,
        vm,
        vdo,
        vdm,
    };
};

export type UseCssNameReturn = ReturnType<
    typeof useCssName
>;
