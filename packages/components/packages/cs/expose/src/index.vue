<template>
    <div :class="cs.z()">{{ value }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { dataProps, dataExpose } from './data';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('expose');
const props = defineProps(dataProps);

const value = ref('');

function setValue(val: string) {
    value.value = val;
}

function getValue() {
    return value.value;
}

defineExpose({
    ...dataExpose,
    setValue,
    getValue,
});
</script>
<style lang="scss"></style>
