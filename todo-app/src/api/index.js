import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:8226',
  usersSuffix: '/v1/users',
  todosSuffix: '/v2/todos',
};

function registerUser(userData) {
  return axios.post(
    `${config.baseUrl}${config.usersSuffix}/register`,
    userData,
  );
}

function fetchLogin(loginData) {
  return axios.post(`${config.baseUrl}${config.usersSuffix}/login`, loginData);
}

function fetchTodos(username) {
  return axios.get(`${config.baseUrl}${config.todosSuffix}/${username}`);
}

export { registerUser, fetchLogin, fetchTodos };
