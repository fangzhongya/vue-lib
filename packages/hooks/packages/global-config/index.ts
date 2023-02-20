import {
    ref,
    unref,
    provide,
    getCurrentInstance,
    inject,
    computed,
} from 'vue';
import type { App, Ref } from 'vue';
import type { MaybeRef } from '@fangzhongya/vue-lib-types';
import { getOnlyKey } from '@fangzhongya/vue-lib-utils';
import { SymbolKey } from '@fangzhongya/vue-lib-utils';

import type { DataProps } from '@fangzhongya/vue-lib-components/packages/config-provider/src/data';

const globalConfig = ref<DataProps>({});

const { GlobalConfig } = SymbolKey;

export function useGlobalConfig<
    K extends keyof DataProps,
    D extends DataProps[K],
>(
    key: K,
    defaultValue?: D,
): Ref<Exclude<DataProps[K], undefined> | D>;
export function useGlobalConfig(): Ref<DataProps>;
export function useGlobalConfig(
    key?: keyof DataProps,
    defaultValue?: DataProps,
) {
    const config = getCurrentInstance()
        ? inject(getOnlyKey(GlobalConfig), globalConfig)
        : globalConfig;

    if (key) {
        return computed(
            () => config.value?.[key] ?? defaultValue,
        );
    } else {
        return config;
    }
}

function setValue<T>(v: T[keyof T], k: keyof T, z: T): T {
    z[k] = v;
    return z;
}

export function setGlobalConfig(
    obj: DataProps | DataProps[keyof DataProps],
    key?: keyof DataProps,
) {
    if (key) {
        globalConfig.value = setValue(
            obj as DataProps[keyof DataProps],
            key,
            globalConfig.value,
        );
    } else {
        globalConfig.value = obj as DataProps;
    }
}

export function provideGlobalConfig(
    config: MaybeRef<DataProps>,
    app?: App,
    global = false,
) {
    const inSetup = !!getCurrentInstance();
    const oldConfig = inSetup
        ? useGlobalConfig()
        : undefined;

    const provideFn =
        app?.provide ?? (inSetup ? provide : undefined);

    const context = computed(() => {
        const cfg = unref(config);
        if (!oldConfig?.value) return cfg;
        return mergeConfig<DataProps>(oldConfig.value, cfg);
    });
    if (provideFn) {
        provideFn(getOnlyKey(GlobalConfig), context);
    }
    if (global || !globalConfig.value) {
        globalConfig.value = context.value;
    }
    return context;
}

function keysOf<T extends object>(arr: T) {
    return Object.keys(arr) as Array<keyof T>;
}

function mergeConfig<T extends object>(a: T, b: T): T {
    const keys = [...new Set([...keysOf(a), ...keysOf(b)])];
    const obj = {} as T;
    for (const key of keys) {
        obj[key] = b[key] ?? a[key];
    }
    return obj;
}
