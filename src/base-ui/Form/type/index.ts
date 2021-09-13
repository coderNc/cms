type IFormType =
  | 'Input'
  | 'Select'
  | 'Radio'
  | 'Checkbox'
  | 'DatePicker'
  | 'TimePicker';
type IDatePickerType =
  | 'year'
  | 'month'
  | 'date'
  | 'dates'
  | 'week'
  | 'datetime'
  | 'datetimerange'
  | 'daterange'
  | 'monthrange';

export interface IFormItem {
  filed: string; // 字段
  type: IFormType;
  label: string;
  rules?: any[];
  // input其他配置
  inputConfig?: {
    type?: 'textarea' | 'password';
    placeholder?: string;
    size?: 'medium' | 'small' | 'mini';
    clearable?: boolean;
    disabled?: boolean;
  };
  // select option
  options?: any[];
  // select其他配置
  selectConfig?: {
    placeholder?: string;
    clearable?: boolean;
    disabled?: boolean;
    size?: 'medium' | 'small' | 'mini';
    multiple?: boolean;
    collapseTags?: boolean;
    filterable?: boolean;
    allowCreate?: boolean;
  };
  // datePicker其他配置
  datePickerConfig?: {
    type?: IDatePickerType; // 显示类型
    editable?: boolean; // 文本框可输入
    placeholder?: string; // 非范围选择时的占位内容
    clearable?: boolean; // 是否显示清除按钮
    disabled?: boolean; // 是否禁用
    size?: 'large' | 'medium' | 'small' | 'mini'; // 输入框尺寸
    startPlaceholder?: string; // 范围选择时开始日期的占位内容
    endPlaceholder?: string; // 范围选择时结束日期的占位内容
    rangeSeparator?: string; // 选择范围时的分隔符
    format?: string; // 显示在输入框中的格式
    valueFormat?: string; // 可选，绑定值的格式。不指定则绑定值Date象
    defaultValue?: Date; // 可选，选择器打开时默认显示的时间
    defaultTime?: Date[]; // 范围选择时选中日期所使用的当日内具体时刻
  };
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  title?: string;
  labelWidth?: string;
  colLayout: any;
  itemLayout: any;
}
