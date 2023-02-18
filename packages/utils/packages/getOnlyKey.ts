const onlyKey: {
    [key: string]: symbol;
} = {};

export function getOnlyKey(key: string) {
    if (!onlyKey[key]) {
        onlyKey[key] = Symbol(key);
    }
    return onlyKey[key];
}
