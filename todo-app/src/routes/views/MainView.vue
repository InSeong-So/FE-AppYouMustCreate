<template>
  <div>
    <Header></Header>
    <LeftMenu></LeftMenu>
    <MiddleTask></MiddleTask>
    <RightEdit></RightEdit>
  </div>
</template>

<script>
import Header from '@/routes/layouts/Header.vue';
import LeftMenu from '@/routes/layouts/LeftMenu.vue';
import MiddleTask from '@/routes/layouts/MiddleTask.vue';
import RightEdit from '@/routes/layouts/RightEdit.vue';

export default {
  components: {
    Header,
    LeftMenu,
    MiddleTask,
    RightEdit,
  },
  created() {},
};
</script>

<style></style>
