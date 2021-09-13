import { RouteRecordRaw } from 'vue-router';
import { IUserMenuResult } from '@/api/login/type';
import { IBreadCrumb } from '@/base-ui/BreadCrumb/type';
let firstMenu: any = undefined;

// 根据菜单动态生成路由
export function mapMenuToRoutes(
  userMenus: IUserMenuResult[]
): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 1.先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  // 获取main文件下的所有以ts结尾的文件/就是获取所有路由文件的路径
  const routeFiles = require.context('../router/main', true, /\.ts/);
  // console.log(routeFiles.keys());
  routeFiles.keys().forEach((key) => {
    // 加载每一个路由对象、通过路径
    const route = require('../router/main' + key.split('.')[1]);
    // console.log(route);
    allRoutes.push(route.default);
  });

  // 2.根据菜单获取需要添加的routes
  // 需要递归来完成对菜单的路由添加
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);
  return routes;
}
// 路径匹配面包屑
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadCrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}
// 路径匹配菜单
export function pathMapToMenu(
  userMenus: IUserMenuResult[],
  path: string,
  breadcrumbs?: IBreadCrumb[]
): any {
  // console.log(path);
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], path);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu;
    }
  }
}

export { firstMenu };
