<template>
    <div :class="cs.z()">{{ getLocale('cs') }}</div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { useLocale } from '@fangzhongya/vue-lib-hooks/locale/index';
import { useCssName } from '@fangzhongya/vue-lib-hooks/cssname/index';
const cs = useCssName('form');
const { getLocale } = useLocale();
const props = defineProps(dataProps);
</script>
<style lang="scss"></style>
