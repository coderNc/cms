import { App } from 'vue';
import { formatUtcString } from '@/utils/date-format';

//   app.config.globalProperties 里注册全局方法、属性
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    test() {
      console.log('tett');
    },
    formatTime(value: string) {
      return formatUtcString(value);
    }
  };
}
