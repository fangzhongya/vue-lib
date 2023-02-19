<template>
    <div :class="cs.z()">测试标签用</div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('title');
const props = defineProps(dataProps);
</script>
<style lang="scss"></style>
