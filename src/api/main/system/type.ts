export interface IUserListRes {
  list: List[];
  totalCount: number;
}

export interface List {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  departmentId: number;
  roleId: number;
  createAt: string;
  updateAt: string;
}
