<template>
    <div :class="cs.z()">{{ getLocale('cs') }}</div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { useLocale } from '@fangzhongya/vue-lib-hooks';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('form');
const { getLocale } = useLocale();
const v = getLocale('cs');
console.log('v', v);
const props = defineProps(dataProps);
</script>
<style lang="scss"></style>
