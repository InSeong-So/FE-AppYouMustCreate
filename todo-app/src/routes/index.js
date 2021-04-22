import Vue from 'vue';
import VueRouter from 'vue-router';
// components
import MainView from '@/routes/views/MainView';
import NotFoundView from '@/routes/views/NotFoundView';
// store
import { store } from '@/store/index';
// util
import eventBus from '@/utils/eventBus';
import { Store } from 'vuex';
import { getUserFromCookie } from '../utils/cookies';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/routes/views/LoginView'),
      beforeEnter: (to, from, next) => {
        // 로그인 상태라면 main으로 아니라면 로그인으로
        store.getters['isLogin'] ? next('/main') : next();
      },
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/routes/views/MainView'),
      beforeEnter,
    },
    {
      path: '*',
      name: 'NotFoundView',
      component: NotFoundView,
    },
  ],
});

function beforeEnter(to, from, next) {
  if (store.getters['isLogin'] || getUserFromCookie()) {
    next();
  } else {
    alert('No Login!');
    next('/login');
  }
}
