<template>
    <div class="emits">
        <div @click="onClick">change</div>
    </div>
</template>
<script lang="ts" setup>
/**
 * @emits change (val:[String, Array])
 * 选择的时间
 */
const emit = defineEmits(['change']);

function onClick() {
    emit('change', []);
}
</script>
<style lang="scss">
@import url('./index.scss');
.emits {
    display: block;
}
</style>
