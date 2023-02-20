/**
 * 是否是对象
 * @param {any} obj 判断值
 * @returns {boolean}
 */
export function isObject(obj: any): boolean {
    return obj !== null && typeof obj === 'object';
}
