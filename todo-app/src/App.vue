<template>
  <div id="app">
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Loading :loading="loadingStatus"></Loading>
  </div>
</template>

<script>
import {
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
} from '@/utils/cookies';
import Loading from '@/components/Loading';
import eventBus from '@/utils/eventBus';

export default {
  name: 'App',
  components: {
    Loading,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startLoading() {
      this.loadingStatus = true;
    },
    endLoading() {
      this.loadingStatus = false;
    },
  },
  created() {
    eventBus.$on('start:loading', this.startLoading);
    eventBus.$on('end:loading', this.endLoading);

    if (getAuthFromCookie()) {
      this.$store.commit('setToken', getAuthFromCookie());
      this.$store.commit('setUsername', getUserFromCookie());
      this.$router.push('/main');
    }
  },
  beforeDestroy() {
    eventBus.$off('start:loading', this.startLoading);
    eventBus.$off('end:loading', this.endLoading);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
