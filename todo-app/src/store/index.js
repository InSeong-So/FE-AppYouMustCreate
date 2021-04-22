import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import { getUserFromCookie } from '../utils/cookies';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username: '',
    token: '',
    todoList: {},
  },
  getters: {
    isLogin(state) {
      return !!state.token || getUserFromCookie();
    },
    userToken(state) {
      return state.token;
    },
  },
  mutations,
  actions,
});
