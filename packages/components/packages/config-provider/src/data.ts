import type { ExtractPropTypes } from 'vue';
import { buildProps } from '@fangzhongya/vue-lib-utils';

import type { Locale } from '@fangzhongya/vue-lib-types';
import { definePropType } from '@fangzhongya/vue-lib-utils';

export const dataProps = buildProps({
    /**
     * @props { Object<Locale> } locale
     * @description 国际化对象
     */
    locale: {
        type: definePropType<Locale>(Object),
    },
    /**
     * @description global Initial zIndex
     */
    zIndex: Number,
    /**
     * @props { String } cssname
     * 前缀样式名称
     */
    cssname: {
        type: String,
    },
});

export type DataProps = ExtractPropTypes<typeof dataProps>;
