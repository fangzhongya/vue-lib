import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../archive.config';
import '@fangzhongya/vue-archive/dist/es/style.css';
import VueArchive from '@fangzhongya/vue-archive';
import './style.css';

const app = createApp(App);
app.use(VueArchive, router);
app.use(router);
app.mount('#app');
