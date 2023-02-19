<template>
    <div :class="cs.z()"></div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { provideGlobalConfig } from '@fangzhongya/vue-lib-hooks/global-config/index';
import { useCssName } from '@fangzhongya/vue-lib-hooks/cssname/index';
const cs = useCssName('config-provider');
const props = defineProps(dataProps);
provideGlobalConfig(props);
</script>
<style lang="scss"></style>
