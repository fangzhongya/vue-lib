<template>
    <div :class="cs.z()">{{ getLocale('cs') }}</div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
import { useLocale } from '@fangzhongya/vue-lib-hooks';
const { getLocale } = useLocale();
const cs = useCssName('form');
const props = defineProps(dataProps);
</script>
<style lang="scss"></style>
