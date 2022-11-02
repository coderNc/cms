import { ItableConfig } from '@/base-ui/Table/type';

export const userTableConfig: ItableConfig = {
  propList: [
    {
      prop: 'id',
      label: 'id',
      minWidth: '150',
      align: 'center',
      slotName: 'id'
    },
    {
      prop: 'name',
      label: '用户名',
      minWidth: '150',
      align: 'center',
      slotName: 'name',
      children: [
        {
          prop: 'id',
          label: 'id1',
          minWidth: '150',
          align: 'center',
          slotName: 'id1'
        },
        {
          prop: 'id',
          label: 'id2',
          minWidth: '150',
          align: 'center',
          slotName: 'id2'
        }
      ]
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '150',
      align: 'center',
      slotName: 'realname'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '150',
      align: 'center',
      slotName: 'enable'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '150',
      align: 'center',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '电话号码',
      minWidth: '150',
      align: 'center',
      slotName: 'cellphone'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '160',
      align: 'center',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '160',
      align: 'center',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '200',
      align: 'center',
      slotName: 'operation'
    }
  ],
  title: '用户列表',
  isSelection: true,
  isIndex: true
};
