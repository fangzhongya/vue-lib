/**
 * @config cover=false
 * cover 是否覆盖当前文件，默认是false， true 表示不覆盖
 * 当前已经由@fangzhongya/create自动生成
 * Tue Feb 14 2023 09:36:54 GMT+0800 (中国标准时间)
 */
/**
 * D:/fangzhongya/monorepo/packages/utils/packages/install.ts
 */
import { test, expect } from 'vitest';
import { withInstall } from '../packages/install';

test('../packages/install', () => {
    const v = withInstall({}, 'cs');
    expect(typeof v.install).toBe('function');
});
