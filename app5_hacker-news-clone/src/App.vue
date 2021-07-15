<template>
	<div id="app">
		<ToolBar></ToolBar>
		<transition name="page">
			<router-view></router-view>
		</transition>
		<Spinner :loading="loadingStatus"></Spinner>
	</div>
</template>

<script>
import ToolBar from '@/routes/layout/ToolBar';
import Spinner from '@/components/common/Spinner';
import eventBus from '@/utils/eventBus';

export default {
	components: {
		ToolBar,
		Spinner,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
	created() {
		eventBus.$on('start:spinner', this.startSpinner);
		eventBus.$on('end:spinner', this.endSpinner);
	},
	beforeDestory() {
		eventBus.$off('start:spinner', this.startSpinner);
		eventBus.$off('end:spinner', this.endSpinner);
	},
};
</script>
<style>
body {
	padding: 0;
	margin: 0;
}

a {
	color: #34495e;
	text-decoration: none;
}

a:hover {
	color: #42b883;
	text-decoration: underline;
}

a.router-link-exact-active {
	text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
