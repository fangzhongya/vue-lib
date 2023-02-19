import { dataProps } from './data';
import { provideGlobalConfig } from '@fangzhongya/vue-lib-hooks';
import { defineComponent, renderSlot } from 'vue';
export default defineComponent({
    props: dataProps,
    setup(props, { slots }) {
        const config = provideGlobalConfig(props);
        return () =>
            renderSlot(slots, 'default', {
                config: config?.value,
            });
    },
});
