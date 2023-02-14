<template>
    <div>
        <div>string: {{ props.string }}</div>
        <div>number: {{ props.number }}</div>
        <div>boolean: {{ props.boolean }}</div>
        <div>array: {{ props.array }}</div>
        <div>object: {{ props.object }}</div>
        <div>function: {{ props.funct }}</div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
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
</script>
<style lang="scss"></style>
