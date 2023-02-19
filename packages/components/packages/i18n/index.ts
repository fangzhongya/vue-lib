/**
 * @config cover=false
 * cover 是否覆盖当前文件，默认是false， true 表示不覆盖
 * 当前已经由@fangzhongya/create自动生成
 * Sun Feb 19 2023 12:35:16 GMT+0800 (中国标准时间)
 */
import { withInstall } from '@fangzhongya/vue-lib-utils/vue/withInstall'
import SrcVue from './src/index.vue'
export const I18n = withInstall(SrcVue, 'I18n');
export default I18n;
export * as I18nData from './src/data';