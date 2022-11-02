import { ncRuquest } from '@/api';
import {
  IAccount,
  IDataType,
  ILoginResult,
  IUserResult,
  IUserMenuResult
} from './type';
// 枚举将所有URL接口
export enum LoginAPI {
  AccountLogin = '/login',
  GetUserInfo = '/users/',
  GetUserMenu = '/role/'
}

const test = (testapi: LoginAPI) => {
  console.log(testapi);
};

test(LoginAPI.AccountLogin);

// 账号登录接口
export function accountLoginRequest(account: IAccount) {
  return ncRuquest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}
// 根据ID获取个人信息
export function getUserInfoRequest(id: number) {
  return ncRuquest.get<IDataType<IUserResult>>({
    url: LoginAPI.GetUserInfo + id
  });
}
// 根据ID获取个人菜单信息
export function getUserMenuRequest(id: number) {
  return ncRuquest.get<IDataType<IUserMenuResult[]>>({
    url: LoginAPI.GetUserMenu + id + '/menu'
  });
}
