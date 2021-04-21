<template>
	<div>
		<UserProfile :info="userInfo">
			<div slot="userName">{{ userInfo.id }}</div>
			<span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
			<span slot="karma">{{ userInfo.karma }}</span>
		</UserProfile>
	</div>
</template>

<script>
import UserProfile from '@/components/UserProfile';

export default {
	components: {
		UserProfile,
	},
	computed: {
		userInfo() {
			return this.$store.state.user;
		},
	},
	created() {
		const userName = this.$route.params.id;
		this.$store.dispatch('FETCH_USER', userName);
	},
};
</script>

<style></style>
