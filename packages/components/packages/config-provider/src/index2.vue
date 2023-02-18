<template>
    <div class="config-provider"></div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { provideGlobalConfig } from '@fangzhongya/vue-lib-hooks/global-config/index';
const props = defineProps(dataProps);
provideGlobalConfig(props);
</script>
<style lang="scss"></style>
