<template>
    <div>
        <div>
            头部
            <slot
                :param="param"
                name="top"
                >1</slot
            >
        </div>
        <div>
            默认
            <slot>2</slot>
        </div>

        <div>
            尾部
            <slot
                :value="value"
                :param="param"
                name="bottom"
                >3</slot
            >
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({});
const value = 'cs';
const param = ref({});
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
</script>
<style lang="scss"></style>
