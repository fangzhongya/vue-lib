import { defineComponent } from 'vue';
import {
    dataProps,
    dataEmits,
    dataExpose,
    dataSlot,
} from './data';
import {
    useCssName,
    useLocale,
} from '@fangzhongya/vue-lib-hooks';

export default defineComponent({
    props: dataProps,
    emits: dataEmits,
    setup(props, { slots }) {
        // 获取国际化字段
        const { getLocale } = useLocale();
        // 样式设置方法
        const cs = useCssName('temp-late');
        return () => {};
    },
});
