import { App } from 'vue';
import * as components from './components';

export * from './components';

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
