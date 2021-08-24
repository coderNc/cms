export interface ILoginState<T = any> {
  token: string;
  userInfo: T;
  userMenus: any;
}
