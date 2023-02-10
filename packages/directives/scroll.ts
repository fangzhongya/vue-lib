import type { Directive } from 'vue';
/**
 *  scroll
 */
export default {
    name: 'scroll',
    mounted(el, binding) {
        let t: NodeJS.Timeout;
        let tm = () => {
            clearTimeout(t);
            t = setTimeout(() => {
                binding.value();
            }, 100);
        };
        const selector = el.getAttribute(`scroll-selector`);
        const distance =
            el.getAttribute(`scroll-distance`) || 10;
        let dom = el;
        if (selector) {
            dom = el.querySelector(selector);
        }
        dom.addEventListener(
            'scroll',
            function (this: HTMLElement) {
                let d = this;
                const s = d.scrollHeight - d.scrollTop;
                const h = d.clientHeight;
                if (s - distance < h) {
                    tm();
                }
            },
            {
                passive: true,
            },
        );
    },
} as Directive;
