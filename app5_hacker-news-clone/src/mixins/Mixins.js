import eventBus from '@/utils/eventBus';

export default {
	mounted() {
		eventBus.$emit('end:spinner');
	},
};
