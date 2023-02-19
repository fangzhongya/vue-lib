<template>
    <div :class="cs.z()">
        <div @click="onClick">change</div>
    </div>
</template>
<script lang="ts" setup>
import { dataProps, dataEmits } from './data';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('emits');
const props = defineProps(dataProps);
const emit = defineEmits(dataEmits);

function onClick() {
    emit('change', []);
}
</script>
<style lang="scss"></style>
