<template>
    <div :class="cs.z()">
        <div></div>
    </div>
</template>
<script lang="ts" setup>
import {
    dataProps,
    dataEmits,
    dataExpose,
    dataSlot,
} from './data';
import {
    useCssName,
    useLocale,
} from '@fangzhongya/vue-lib-hooks';
// 获取国际化字段
const { getLocale } = useLocale();
// 样式设置方法
const cs = useCssName('bangds-dsadf');
const props = defineProps(dataProps);
const emit = defineEmits(dataEmits);

defineExpose({
    ...dataExpose,
});
</script>
<style lang="scss"></style>
