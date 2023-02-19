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
import * as locale from '@fangzhongya/vue-lib-locale/index';
import type { Locale } from '@fangzhongya/vue-lib-types/locale';
import { lineToSmallHump } from '@fangzhongya/utils/name/lineToSmallHump';
import { useGlobalConfig } from '@fangzhongya/vue-lib-hooks/global-config/index';
import { useCssName } from '@fangzhongya/vue-lib-hooks/cssname/index';
const cs = useCssName('i18n');
const config = useGlobalConfig();

const comlocales: {
    [key: string]: Locale;
} = locale;

const props = defineProps(dataProps);
const list = Object.entries(comlocales.common.value);

function onClick(item: [string, string]) {
    const mc = lineToSmallHump(item[0]);
    config.value.locale = comlocales[mc];
}
</script>
<style lang="scss"></style>
