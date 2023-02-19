import type { ExtractPropTypes } from 'vue';

import { buildProps } from '@fangzhongya/vue-lib-utils';

export const dataProps = buildProps({});

/**
 * @emits change (val:[String, Array])
 * 选择的时间
 */
export const dataEmits = {
    change: (evt: string | string[]) => {},
};

export type DataEmits = typeof dataEmits;

export type DataProps = ExtractPropTypes<typeof dataProps>;
