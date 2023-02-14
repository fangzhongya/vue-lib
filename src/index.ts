import type { App } from 'vue';
import * as components from '@fangzhongya/vue-lib-components';

export * from '@fangzhongya/vue-lib-components';

export default {
    install: function (app: App) {
        Object.keys(components).forEach((key) => {
            const com = components as {
                [key: string]: any;
            };
            com[key].install(app);
        });
    },
};
