import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '文档',
        meta: { title: '文档' },
        redirect: {},
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
