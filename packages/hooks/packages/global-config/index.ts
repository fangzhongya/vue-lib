import {
    ref,
    unref,
    provide,
    getCurrentInstance,
    inject,
    computed,
} from 'vue';
import type { App, Ref } from 'vue';
// import type { MaybeRef } from '@fangzhongya/vue-lib-types/hooks';
import { getOnlyKey } from '@fangzhongya/vue-lib-utils/getOnlyKey';
import { SymbolKey } from '@fangzhongya/vue-lib-utils/enums';
// import type { DataProps } from '@fangzhongya/vue-lib-components/config-provider/src/data';
import type { ConfigProviderData } from '@fangzhongya/vue-lib-components/config-provider/index';
type DataProps = ConfigProviderData.DataProps;

const { GlobalConfig } = SymbolKey;

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

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type MaybeRef<T> = T | Ref<T> | Readonly<T>;

const globalConfig = ref<DataProps>();
export const provideGlobalConfig = (
    config: MaybeRef<DataProps>,
    app?: App,
    global = false,
) => {
    const inSetup = !!getCurrentInstance();
    const oldConfig = inSetup
        ? useGlobalConfig()
        : undefined;

    const provideFn =
        app?.provide ?? (inSetup ? provide : undefined);
    if (!provideFn) {
        console.log('');
        return;
    }

    const context = computed(() => {
        const cfg = unref(config);
        if (!oldConfig?.value) return cfg;
        return mergeConfig<DataProps>(oldConfig.value, cfg);
    });
    provideFn(getOnlyKey(GlobalConfig), context);
    if (global || !globalConfig.value) {
        globalConfig.value = context.value;
    }
    return context;
};

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
