import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { setupStore } from './store';
import { globalRegister } from '@/global';
import 'normalize.css';
import '@/assets/css/index.scss';

const app = createApp(App);
setupStore();
app.use(globalRegister);
app.use(router);
app.use(store);
app.mount('#app');
