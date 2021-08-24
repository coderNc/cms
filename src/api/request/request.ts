import axios, { AxiosInstance } from 'axios';
import { NCRequestConfig, NCRequestInterceptors } from '@/api/request/type';
import { ElLoading, ElMessage as Message } from 'element-plus';
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';

class NCRequest {
  instance: AxiosInstance;
  interceptors?: NCRequestInterceptors;
  showLoading: boolean;
  loading?: ILoadingInstance;
  constructor(config: NCRequestConfig) {
    // 对实例和拦截器进行初始化
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? false;
    // 注册实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求中...',
            background: 'rgba(0,0,0,0.5)'
          });
        }

        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        const { data } = res;
        return data;
      },
      (err) => {
        return err.response;
      }
    );
  }

  request<T>(config: NCRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 自己拦截 的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: NCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: NCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  patch<T>(config: NCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
  delete<T>(config: NCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
}
export default NCRequest;
