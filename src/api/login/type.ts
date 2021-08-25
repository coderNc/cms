export interface IAccount {
  name: string;
  password: string;
}
export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}
export interface IDataType<T = any> {
  code: number;
  data: T;
}
export interface IUserResult {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  createAt: string;
  updateAt: string;
  role: Role;
  department: Department;
}

export interface Department {
  id: number;
  name: string;
  parentId?: null;
  createAt: string;
  updateAt: string;
  leader: string;
}

export interface Role {
  id: number;
  name: string;
  intro: string;
  createAt: string;
  updateAt: string;
}
export interface IUserMenuResult {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  children: IUserMenuResult[];
}

/* export interface Children {
  id: number;
  url: string;
  name: string;
  sort: number;
  type: number;
  children?: Children[];
  parentId: number;
} */
