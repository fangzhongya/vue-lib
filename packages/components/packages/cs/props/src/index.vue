<template>
    <div :class="cs.z()">
        <div :class="cs.z('string')">
            string: {{ props.string }}
        </div>
        <div :class="cs.z('number')">
            number: {{ props.number }}
        </div>
        <div :class="cs.z('boolean')">
            boolean: {{ props.boolean }}
        </div>
        <div :class="cs.z('array')">
            array: {{ props.array }}
        </div>
        <div :class="cs.z('object')">
            object: {{ props.object }}
        </div>
        <div :class="cs.z('function')">
            function: {{ props.funct }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('props');
const props = defineProps(dataProps);
</script>
<style lang="scss"></style>
