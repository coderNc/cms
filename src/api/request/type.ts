import { AxiosResponse, AxiosRequestConfig } from 'axios';
export interface NCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
export interface NCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: NCRequestInterceptors<T>;
  showLoading?: boolean;
}
// 默认拦截器
/* export const interceptors = {
  requestInterceptor: (config: NCRequestConfig): NCRequestConfig => {
    // 携带token的拦截
    const token = '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('请求成功拦截');
    return config;
  },
  requestInterceptorCatch: (err: any): void => err,
  responseInterceptor: (res: AxiosResponse): AxiosResponse<any> => {
    console.log('响应成功成功拦截');
    if (res.data && res.status === 200) {
      return res.data;
    }
    return res.data;
  },
  responseInterceptorCatch: (err: any): void => err
}; */
