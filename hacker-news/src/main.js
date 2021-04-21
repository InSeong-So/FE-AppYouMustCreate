import Vue from 'vue';
import App from './App.vue';
// 분리한 router 모듈
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
