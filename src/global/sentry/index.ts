import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import { App } from 'vue';
import { Router } from 'vue-router';

const rrlog = (key: any, value: any) => {
  console.log(`==============${key}============`, value);
};
export const sentryInit = (app: App, router: Router) => {
  Sentry.init({
    app,
    dsn: 'http://68314a3acc034e228b20e1113ca6e45f@127.0.0.1:9000/2',
    // dsn: 'https://6fba18ce00524927aa4403de88411380@o4504089397886976.ingest.sentry.io/4504133558796288',
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
      })
    ],
    // 不同的环境上报到不同的 environment 分类
    //   environment: process.env.ENVIRONMENT,
    //  高访问量应用可以控制上报百分比
    tracesSampleRate: 1.0,
    release: process.env.SENTRY_VERSION || '0.0.2', // 版本号，每次都npm run build上传都修改版本号
    beforeSend: (event, hint) => {
      rrlog('event', event);
      rrlog('hint', hint);
      return event;
    }
  });
};

export default Sentry;
