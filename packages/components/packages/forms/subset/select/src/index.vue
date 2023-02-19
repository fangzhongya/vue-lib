<template>
    <div :class="cs.z()"></div>
</template>
<script lang="ts" setup>
import { useCssName } from '@fangzhongya/vue-lib-hooks/cssname/index';
import { dataProps } from './data';
const cs = useCssName('select');
const props = defineProps(dataProps);
</script>
<style lang="scss"></style>
