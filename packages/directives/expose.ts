// import type { Directive } from 'vue';
// /**
//  * 解决暴露方法问题
//  * @param {string} value 暴露的对应属性上
//  */
// export default {
//     name: 'expose',
//     created(_el, binding, vnode) {
//         const exposed = vnode.ctx.exposed;
//         if (exposed) {
//             const value = binding.value;
//             if (value && typeof value == 'string') {
//                 binding.instance[value] = exposed;
//             } else {
//                 Object.keys(exposed).forEach((key) => {
//                     if (!binding.instance[key]) {
//                         binding.instance[key] =
//                             exposed[key];
//                     }
//                 });
//             }
//         }
//     },
// } as Directive;
export {};
