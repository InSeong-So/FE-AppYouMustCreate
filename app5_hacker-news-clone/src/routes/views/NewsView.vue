<template>
	<div>
		<ListItem></ListItem>
	</div>
</template>

<script>
import ListItem from '@/components/ListItem';
import Mixins from '@/mixins/Mixins';

export default {
	components: {
		ListItem,
	},
	mixins: { Mixins },
};
</script>
