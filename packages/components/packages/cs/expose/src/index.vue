<template>
    <div>{{ value }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');

function setValue(val: string) {
    value.value = val;
}

function getValue() {
    return value.value;
}

/**
 * @expose setValue (val:<string>设置的数据 )
 * 设置值
 */
/**
 * @expose { string : 当前的值} getValue ()
 * 获取当前值
 */
defineExpose({
    setValue,
    getValue,
});
</script>
<style lang="scss"></style>
