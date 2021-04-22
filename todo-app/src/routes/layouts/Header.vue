<template>
  <div class="header">
    <div class="header-center">
      <ul>
        <li @click="headerEvent('first')">
          <i class="fas fa-home fa-3x"> </i>
          <span>Home</span>
        </li>
        <li v-for="page in workList" :key="page.no" @click="headerEvent(page)">
          <i class="fas fa-sticky-note fa-3x"></i>
          <span>{{ page.name }}</span>
        </li>
        <li @click="headerEvent('add')">
          <i class="fas fa-plus fa-3x"> </i>
          <span>Add</span>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <ul>
        <li @click="openSettings">
          <i class="fas fa-cog fa-3x"></i>
        </li>
        <li @click="logout">
          <i class="fas fa-sign-out-alt fa-3x"></i>
        </li>
      </ul>
      <Setting :isOpen="openStatus"> </Setting>
    </div>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus';
import Setting from '@/components/Setting.vue';

export default {
  components: {
    Setting,
  },
  data() {
    return {
      workList: [{ no: 1, name: '1 Page' }],
      openStatus: false,
    };
  },
  methods: {
    headerEvent(event) {
      if (typeof event == 'object') {
        // 내용 다시 렌더링
      } else if (event === 'first') {
        // 메인 목차 불러오기
      } else if (event === 'add') {
        // 최대 5개 페이지만
        if (this.workList.length > 4) return;
        // 리스트 추가
        let todoPage = this.getNextPage();
        this.workList.push(todoPage);
      }
    },
    getNextPage() {
      let { no } = this.workList[this.workList.length - 1];
      no = no + 1;
      return { no: no, name: no + ' Page' };
    },
    openSettings() {
      this.openStatus = true;
    },
    closeSettings() {
      this.openStatus = false;
    },
    logout() {
      this.$store.commit('logout');
      this.$router
        .push('/login')
        .then()
        .catch(err => {
          console.log(err);
        });
    },
  },
  created() {
    eventBus.$on('open:settings', this.openSettings);
    eventBus.$on('close:settings', this.closeSettings);
  },
  beforeDestroy() {
    eventBus.$off('open:settings', this.openSettings);
    eventBus.$off('close:settings', this.closeSettings);
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;
}

li {
  margin: 0.5rem 1rem 0 0;
  display: inline-block;
  font-size: 0.5rem;
}

li > span {
  margin-top: 5px;
  color: #42bdff;
  font-size: 16px;
  font-weight: bold;
  display: block;
}

.header {
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid #dddddd;
}

.header-center {
  width: 95%;
}

.header-right {
  width: 5%;
}

.header-right > ul {
  padding: 0;
}

.fa-home {
  padding: 10px;
  border-radius: 50%;
  background-color: #32a852;
  color: #ffffff;
}

.fa-sticky-note {
  width: 27px;
  padding: 10px;
  border-radius: 50%;
  background-color: #42bdff;
  color: #ffffff;
}

.fa-plus {
  width: 27px;
  padding: 10px;
  border-radius: 50%;
  background-color: #42bdff;
  color: #ffffff;
}
</style>
