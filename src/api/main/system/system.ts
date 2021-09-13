import { ncRuquest } from '@/api';
import { IDataType } from '@/api/login/type';
import { pageParams } from '@/store/main/system/type';
import { IUserListRes } from './type';

enum UserApis {
  getUserList = '/users/list'
}
export function getUserList(params: pageParams) {
  return ncRuquest.post<IDataType<IUserListRes>>({
    url: params.pageUrl,
    data: params.queryInfo
  });
}
