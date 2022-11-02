export interface ITableColumn {
  prop?: string; // 绑定的属性
  label?: string; // 表头
  minWidth?: string; // 最小宽度
  align?: string; // 对齐方式
  slotName?: string; // 插槽名称
  children?: ITableColumn[];
}
export interface ItableConfig {
  title?: string;
  propList: ITableColumn[];
  isSelection?: boolean; // 是否需要选择框
  isIndex?: boolean; // 是否需要序号列
}
