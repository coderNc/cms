import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { setupStore } from './store';
import { globalRegister, sentryInit } from '@/global';
import 'normalize.css';
import '@/assets/css/index.scss';

const app = createApp(App);
sentryInit(app, router);
app.use(globalRegister);

app.use(store);
setupStore();
app.use(router);
app.mount('#app');
