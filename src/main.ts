import { createApp } from 'vue';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import App from './App.vue';
import router from './router';
import store from './store';
import { setupStore } from './store';
import { globalRegister } from '@/global';
import 'normalize.css';
import '@/assets/css/index.scss';

const app = createApp(App);

const rrlog = (key: any, value: any) => {
  console.log(`==============${key}============`, value);
};

Sentry.init({
  app,
  dsn: 'http://68314a3acc034e228b20e1113ca6e45f@127.0.0.1:9000/2',
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
    })
  ],
  // 不同的环境上报到不同的 environment 分类
  //   environment: process.env.ENVIRONMENT,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  //  高访问量应用可以控制上报百分比
  tracesSampleRate: 1.0,
  release: process.env.SENTRY_VERSION || '0.0.1', // 版本号，每次都npm run build上传都修改版本号
  beforeSend: (event, hint) => {
    rrlog('event', event);
    rrlog('hint', hint);
    return event;
  }
});

app.use(globalRegister);

app.use(store);
setupStore();
app.use(router);
app.mount('#app');
