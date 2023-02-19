import type { ExtractPropTypes } from 'vue';

import { buildProps } from '@fangzhongya/vue-lib-utils';

export const dataProps = buildProps({
    /**
     * @props { } modelValue/v-model
     * 支持的国际化语言
     */
    modelValue: {
        type: String,
        default: 'zh-cn',
    },
});

export type DataProps = ExtractPropTypes<typeof dataProps>;
