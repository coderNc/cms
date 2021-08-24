import { createStore, storeKey } from 'vuex';
import login from './login/login';
import { IRootState } from './type';

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

export default store;
