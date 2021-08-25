import { IForm } from '@/base-ui/form';

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      type: 'Input',
      label: 'id',
      inputConfig: {
        placeholder: '请输入id'
      }
    },
    {
      type: 'Input',
      label: '用户名',
      inputConfig: {
        placeholder: '请输入用户名'
      }
    },
    {
      type: 'Input',
      label: '密码',

      inputConfig: {
        type: 'password',
        placeholder: '请输入密码',
        size: 'mini'
      }
    },
    {
      type: 'Select',
      label: '喜欢的运动',
      selectConfig: {
        placeholder: '请选择喜欢的运动',
        clearable: true,
        multiple: true,
        filterable: true
      },
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      type: 'DatePicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      },
      datePickerConfig: {
        type: 'daterange',
        format: 'YYYY 年 MM 月 DD 日',
        size: 'large',
        valueFormat: 'x',
        rangeSeparator: '至',
        startPlaceholder: 'n',
        endPlaceholder: 'c',
        defaultTime: [new Date(2010, 9, 1), new Date(2010, 10, 1)]
      }
    },
    {
      type: 'Input',
      label: '备注',
      inputConfig: {
        type: 'textarea',
        size: 'mini',
        clearable: true
      }
    }
  ]
};
