import type { App, Component, Plugin } from 'vue';

export type withInstall<T> = T & Plugin;

export function withInstall<T>(component: T, name: string) {
    (component as withInstall<T>).install = (
        app: App,
    ): void => {
        //注册组件
        app.component(
            name || (component as any).name,
            component as Component,
        );
    };
    return component as withInstall<T>;
}
