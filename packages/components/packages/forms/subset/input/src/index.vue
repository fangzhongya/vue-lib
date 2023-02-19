<template>
    <div :class="cs.z()">{{ getLocale('hello') }}</div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { useLocale } from '@fangzhongya/vue-lib-hooks';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('input');
const { getLocale } = useLocale();
const props = defineProps(dataProps);
</script>
<style lang="scss"></style>
