import type { ExtractPropTypes } from 'vue';

import { buildProps } from '@fangzhongya/vue-lib-utils';

export const dataProps = buildProps({
    /**
     * @props { String, Number, Array<String> } many= ( )
     * 多类型
     */
    many: {
        type: [],
    },
});

export type DataProps = ExtractPropTypes<typeof dataProps>;

/**
 * @emits change (val:[String, Array])
 * 选择的时间
 */
export const dataEmits = {
    change: (evt: string | string[]) => {},
};

export type DataEmits = typeof dataEmits;

/**
 * @slot default 默认插槽
 */
export const dataSlot = {
    default: 'default',
};

/**
 * expose setValue (val:<string>设置的数据 )
 * 设置值
 */
export const dataExpose = {};
