import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from './views/NewsView';
import AskView from './views/AskView';
import JobsView from './views/JobsView';
import UserView from './views/UserView';
import ItemView from './views/ItemView';
import eventBus from '@/utils/eventBus';
import { store } from '@/store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/news',
		},
		{
			path: '/news',
			name: 'news',
			component: NewsView,
			beforeEnter: (to, from, next) => {
				eventBus.$emit('start:spinner');
				store
					.dispatch('FETCH_LIST', to.name)
					.then(() => {
						eventBus.$emit('end:spinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			},
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
			beforeEnter: (to, from, next) => {
				eventBus.$emit('start:spinner');
				store
					.dispatch('FETCH_LIST', to.name)
					.then(() => {
						eventBus.$emit('end:spinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			},
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView,
			beforeEnter: (to, from, next) => {
				eventBus.$emit('start:spinner');
				store
					.dispatch('FETCH_LIST', to.name)
					.then(() => {
						eventBus.$emit('end:spinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			},
		},
		{
			path: '/user/:id',
			component: UserView,
		},
		{
			path: '/item/:id',
			component: ItemView,
		},
	],
});
