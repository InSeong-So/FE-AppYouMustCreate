<template>
  <transition name="fade-settings">
    <div class="sidenav" v-show="isOpen">
      <button @click="closeSettings">
        <i class="fas fa-times fa-2x"></i>
      </button>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  </transition>
</template>

<script>
import eventBus from '@/utils/eventBus';
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeSettings() {
      eventBus.$emit('close:settings');
    },
  },
};
</script>

<style scoped>
.sidenav {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  z-index: 1;
  background-color: #111;
  overflow-x: hidden;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.fade-settings-enter-active {
  transition: all 0.2s ease;
}
.fade-settings-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-settings-enter,
.fade-settings-leave-to {
  opacity: 0;
}
</style>
