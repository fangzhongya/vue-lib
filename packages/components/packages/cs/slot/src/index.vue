<template>
    <div :class="cs.z()">
        <div :class="cs.z('top')">
            头部
            <slot
                :param="param"
                :name="dataSlot.top"
                >1</slot
            >
        </div>
        <div>
            默认
            <slot>2</slot>
        </div>

        <div :class="cs.z('bottom')">
            尾部
            <slot
                :value="value"
                :param="param"
                :name="dataSlot.bottom"
                >3</slot
            >
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { dataProps, dataSlot } from './data';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('slot');
const props = defineProps(dataProps);
const value = 'cs';
const param = ref({});
</script>
<style lang="scss"></style>
