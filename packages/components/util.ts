import type { App, Component } from 'vue';

export function withInstall<T>(
    component: T,
    name: string,
): T {
    const comp = component as any;
    comp.install = (app: App) => {
        app.component(
            name || comp.name || comp.displayName,
            component as Component,
        );
    };
    return component;
}
