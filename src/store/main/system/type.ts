import { List } from '@/api/main/system/type';

export interface ISystemState {
  userList: List[];
  userCount: number;
}

export interface pageParams {
  pageUrl: string;
  queryInfo: {
    offset: number;
    size: number;
  };
}
