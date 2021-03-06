import { App } from 'vue';
import 'element-plus/lib/theme-chalk/base.css';
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElCard,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMessage,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElTimePicker,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination
} from 'element-plus';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElCard,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMessage,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElTimePicker,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
