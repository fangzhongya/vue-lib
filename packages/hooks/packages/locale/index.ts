import { useGlobalConfig } from '../global-config';
import type { Locale } from '@fangzhongya/vue-lib-types/locale';

import zhCn from '@fangzhongya/vue-lib-locale/zh-cn';
import type { MaybeRef } from '@fangzhongya/vue-lib-types/hooks';
import { ref, unref, isRef, computed } from 'vue';
import type { Ref } from 'Vue';

export type Translator = (path: string) => string;

export type LocaleContext = {
    locale: Ref<Locale>;
    lang: Ref<string>;
    getLocale: Translator;
};

function getValue(key: string, locale: any): any {
    const arr = key.split('.');
    let obj = locale;
    for (let index = 0; index < arr.length; index++) {
        const v = arr[index];
        obj = obj[v];
        if (typeof obj === 'undefined') {
            break;
        }
    }
    return obj;
}

export function buildTranslator(
    locale: MaybeRef<Locale>,
): Translator {
    return (path) => getValue(path, unref(locale));
}

export function buildLocaleContext(
    locale: MaybeRef<Locale>,
): LocaleContext {
    const lang = computed(() => unref(locale).name);
    const localeRef = isRef(locale) ? locale : ref(locale);
    return {
        lang,
        locale: localeRef,
        getLocale: buildTranslator(locale),
    };
}

export function useLocale() {
    const locale = useGlobalConfig('locale');
    return buildLocaleContext(
        computed(() => locale.value || zhCn),
    );
}
