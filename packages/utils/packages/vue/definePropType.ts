import type { PropType } from 'vue';

export function definePropType<T>(val: any): PropType<T> {
    return val;
}
