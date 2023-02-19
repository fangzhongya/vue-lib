import type { ExtractPropTypes } from 'vue';

import { buildProps } from '@fangzhongya/vue-lib-utils';

/**
 * @title {h1} 测试标签
 * @author 方忠亚
 * @date 2023年1月30日19点39分
 * @text 1测试标签对象 
 * @text {div} 2测试标签对象 div
 * @text {span} 3测试标签对象 span
 * @title {i} 4测试标签对象 i
 * @text 一旦你的代码是已注释的，你可以是用 JSDoc 3的工具从源文件中生成一个 HTML 网站。
默认情况下，JSDoc 使用内置的“默认”模板将文档转换为 HTML。您可以根据自己的需要编辑此模板，或者创建一个全新的模板（如果您喜欢的话）。
在命令行上运行文档生成器：
 * @title 测试结束
 */

export const dataProps = buildProps({});

export type DataProps = ExtractPropTypes<typeof dataProps>;
