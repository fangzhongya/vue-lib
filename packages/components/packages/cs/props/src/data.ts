import type { ExtractPropTypes } from 'vue';

import { buildProps } from '@fangzhongya/vue-lib-utils';

export const dataProps = buildProps({
    /**
     * @props { String } string= ( )
     * 字符串
     */
    string: {
        type: String,
    },
    /**
     * @props { Number } number= ( )
     * 数字
     */
    number: {
        type: Number,
    },
    /**
     * @props { Boolean } boolean= ( )
     * 是否
     */
    boolean: {
        type: Boolean,
    },
    /**
     * @props { Array } array= ( )
     * 数组
     */
    array: {
        type: Array,
    },
    /**
     * @props { Object } object= ( )
     * 对象
     */
    object: {
        type: Object,
    },
    /**
     * @props { Function } funct= ( )
     * 方法
     */
    funct: {
        type: Function,
    },
    /**
     * @props { * } any= ( )
     * 所有类型
     */
    any: {
        type: null,
    },
    /**
     * @props { } all= ( )
     * 所有类型
     */
    all: {
        type: null,
    },
    /**
     * @props { String, Number, Array<String> } many= ( )
     * 多类型
     */
    many: {
        type: [String, Number, Array],
    },

    /**
     * @props { Date  } date= ( )
     * 时间
     */
    date: {
        type: Date,
    },
});

export type DataProps = ExtractPropTypes<typeof dataProps>;
