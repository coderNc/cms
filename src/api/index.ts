// 统一出口
import NCRequest from './request/request';
import { BASE_URL, TIME_OUT } from './request/config';
// 实例化，传入不同的基础配置
// 可以传入自己的拦截器，也可以使用默认配置
export const ncRuquest = new NCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = '';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log('实例请求成功拦截');
      return config;
    },
    requestInterceptorCatch: (err: any): void => err,
    responseInterceptor: (res) => {
      console.log('实例响应成功成功拦截');
      return res;
    },
    responseInterceptorCatch: (err: any): void => err
  }
});
