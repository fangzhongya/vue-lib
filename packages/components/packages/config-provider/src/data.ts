import type { ExtractPropTypes } from 'vue';
import type { Locale } from '@fangzhongya/vue-lib-types/locale';

import { definePropType } from '@fangzhongya/vue-lib-utils/vue/definePropType';

import { buildProps } from '@fangzhongya/vue-lib-utils/vue/props/runtime';

export const dataProps = buildProps({
    /**
     * @description Controlling if the users want a11y features
     */
    a11y: {
        type: Boolean,
        default: true,
    },
    /**
     * @description Locale Object
     */
    locale: {
        type: definePropType<Locale>(Object),
    },
    /**
     * @description global Initial zIndex
     */
    zIndex: Number,
    /**
     * @description
     */
    cssname: {
        type: String,
    },
});

export type DataProps = ExtractPropTypes<typeof dataProps>;
