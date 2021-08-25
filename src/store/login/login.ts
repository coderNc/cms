import { Module } from 'vuex';
import router from '@/router';
import { ILoginState } from './type';
import { IRootState } from '../type';
import {
  accountLoginRequest,
  getUserInfoRequest,
  getUserMenuRequest
} from '@/api/login/login';
import { IAccount } from '@/api/login/type';
import localCache from '@/utils/cache';
import { mapMenuToRoutes } from '@/utils/map-menu';
import { IUserResult, IUserMenuResult } from '@/api/login/type';

// Module接受两个参数 Module<S, R>S是自己模块state的类型；R是根模块state的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: IUserResult) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: IUserMenuResult[]) {
      state.userMenus = userMenus;
      // 将菜单映射到路由对象 userMenus => routes
      const routes = mapMenuToRoutes(userMenus);
      // console.log(routes);

      // 将routes添加到router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
    }
  },
  actions: {
    // 账号登录的actions
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const res = await accountLoginRequest(payload);
      const { code, data } = res;
      console.log(res);
      if (!code && data) {
        // 将token保存到state和localstorg中
        commit('changeToken', data.token);
        localCache.setCache('token', data.token);
        // 2.请求个人信息
        const userInfoResult = await getUserInfoRequest(data.id);
        // console.log(userInfoResult);
        localCache.setCache('userInfo', userInfoResult.data);
        commit('changeUserInfo', userInfoResult.data);
        // 3.请求用户菜单信息
        const userMenuResult = await getUserMenuRequest(data.id);
        // console.log(userMenuResult);
        commit('changeUserMenus', userMenuResult.data);
        localCache.setCache('userMenus', userMenuResult.data);
        // 4. 跳转到首页
        router.push({
          path: '/main'
        });
      }
    },
    // 每次页面刷新，将localstorge的数据保存到vuex中
    loadLocaleLogin({ commit }, payload) {
      const token: string = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo: IUserResult = localCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus: IUserMenuResult[] = localCache.getCache('userMenus');
      if (userMenus) {
        commit('changeUserMenus', userMenus);
      }
    }
  }
};

export default loginModule;
