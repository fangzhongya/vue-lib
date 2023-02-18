/**
 * @config cover=false
 * cover 是否覆盖当前文件，默认是false， true 表示不覆盖
 * 当前已经由@fangzhongya/create自动生成
 * Sun Feb 19 2023 00:46:38 GMT+0800 (中国标准时间)
 */
import { withInstall } from '@fangzhongya/vue-lib-utils/vue/withInstall'
import SrcVue from './src/index.vue'
export const Select = withInstall(SrcVue, 'Select');
export default Select;
export * as SelectData from './src/data';