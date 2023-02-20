<template>
    <div :class="cs.z()">
        <div
            :class="cs.z('list')"
            v-for="(item, index) in list"
            :key="index"
        >
            <div
                :class="[
                    cs.z('list-li'),
                    cs.is(
                        'on',
                        props.modelValue == item[0],
                    ),
                ]"
                @click.stop="onClick(item)"
            >
                {{ item[1] }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { dataProps } from './data';
import { unref, ref } from 'vue';
import * as locale from '@fangzhongya/vue-lib-locale';
import type { Locale } from '@fangzhongya/vue-lib-types';
import { lineToSmallHump } from '@fangzhongya/utils/name/lineToSmallHump';
import {
    useGlobalConfig,
    setGlobalConfig,
} from '@fangzhongya/vue-lib-hooks';
import { useCssName } from '@fangzhongya/vue-lib-hooks';
const cs = useCssName('i18n');
const config = useGlobalConfig();
const objconfig = unref(config) || {};

const comlocales: {
    [key: string]: Locale;
} = locale;

const props = defineProps(dataProps);
const list = Object.entries(comlocales.common.value);

function onClick(item: [string, string]) {
    const mc = lineToSmallHump(item[0]);
    objconfig.locale = comlocales[mc];
    objconfig.cssname = item[0];
    setGlobalConfig(objconfig);
}
</script>
<style lang="scss"></style>
