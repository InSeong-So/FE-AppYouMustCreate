import { fetchLogin, fetchTodos } from '@/api/index';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';

export default {
  async LOGIN({ commit }, userData) {
    const { data } = await fetchLogin(userData);
    // state commit
    commit('setToken', data.token);
    commit('setUsername', data.username);
    // cookie set
    saveAuthToCookie(data.token);
    saveUserToCookie(data.username);

    return data;
  },
  async FETCH_TODO_LIST({ commit }, username) {
    const { data } = await fetchTodos(getUserFromCookie());
    // commit('setTodoList', data);
    return data;
  },
};
