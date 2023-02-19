import type { App } from 'vue';
import * as components from '@fangzhongya/vue-lib-components';
import * as directives from '@fangzhongya/vue-lib-directives';
export * from '@fangzhongya/vue-lib-components';
export * from '@fangzhongya/vue-lib-directives';

type ObjAny = {
    [key: string]: any;
};

export default {
    install: function (app: App) {
        const com: ObjAny = components;
        Object.keys(com).forEach((key) => {
            com[key].install(app);
        });
        const dire: ObjAny = directives;
        Object.keys(dire).forEach((key) => {
            app.directive(key, dire[key]);
        });
    },
};
