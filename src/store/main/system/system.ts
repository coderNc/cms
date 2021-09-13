import { Module } from 'vuex';
import { ISystemState, pageParams } from './type';
import { IRootState } from '../../type';
import { getUserList } from '@/api/main/system/system';
import { List } from '@/api/main/system/type';

const systemModule: Module<ISystemState, IRootState> = {
  state() {
    return {
      userList: [],
      userCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: List[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    }
  },
  actions: {
    async getPageList({ commit }, payload: pageParams) {
      const listRes = await getUserList(payload);
      if (!listRes.code) {
        commit('changeUserList', listRes.data.list);
        commit('changeUserCount', listRes.data.totalCount);
      }
    }
  }
};

export default systemModule;
