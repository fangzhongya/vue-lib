import type { ExtractPropTypes } from 'vue';

import { buildProps } from '@fangzhongya/vue-lib-utils';

export const dataProps = buildProps({});

export type DataProps = ExtractPropTypes<typeof dataProps>;

/**
 * @expose setValue (val:<string>设置的数据 )
 * 设置值
 */
/**
 * @expose { string : 当前的值} getValue ()
 * 获取当前值
 */
export const dataExpose = {};
