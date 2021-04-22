import { deleteCookie } from '@/utils/cookies';

export default {
  setUsername(state, username) {
    state.username = username;
  },
  clearUsername(state) {
    state.username = '';
  },
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = '';
  },
  setTodoList(state, todoList) {
    state.todoList = todoList;
  },
  logout(state) {
    state.username = null;
    state.token = null;
    deleteCookie('todo_auth');
    deleteCookie('todo_user');
  },
};
