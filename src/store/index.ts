import { createStore, Store, useStore as useVuexStore } from 'vuex';
import login from './login/login';
import { IRootState, IStoreType } from './type';

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderniu'
    };
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
});

export function setupStore() {
  store.dispatch('login/loadLocaleLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
