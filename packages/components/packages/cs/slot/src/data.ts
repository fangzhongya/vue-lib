import type { ExtractPropTypes } from 'vue';

import { buildProps } from '@fangzhongya/vue-lib-utils';

export const dataProps = buildProps({});

export type DataProps = ExtractPropTypes<typeof dataProps>;

/**
 * @slot top (param:<Object> 对象)
 * 头部插入
 */
/**
 * @slot default ( )
 * 默认插入
 */
/**
 * @slot bottom ( value :<string> 值, param:<Object> 对象)
 * 尾部插入
 */

export const dataSlot = {
    bottom: 'bottom',
    top: 'top',
};
