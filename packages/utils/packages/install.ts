import type { App, Component, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(component: T, name: string) {
    (component as SFCWithInstall<T>).install = (
        app: App,
    ): void => {
        //注册组件
        app.component(
            name || (component as any).name,
            component as Component,
        );
    };
    return component as SFCWithInstall<T>;
}
