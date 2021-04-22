<template>
  <div class="middle-task">
    <div class="all-task">
      <div class="task-area">
        <p class="task-header">All Tasks</p>
        <p class="task-stat">7 uncompleted tasks</p>
      </div>
      <div class="fold-area">
        <span class="fa-stack fa-2x">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i v-if="!true" class="fas fa-book fa-stack-1x fa-inverse"></i>
          <i v-else class="fas fa-book-open fa-stack-1x fa-inverse"></i>
        </span>
      </div>
    </div>
    <!-- 스크롤 영역 -->
    <div class="add-task"></div>
    <div class="task-list">
      <label for="tm" class="accordionitem">
        <h2>Item 1 <span class="arrow"> >></span></h2>
      </label>
      <input type="checkbox" id="tm" />
      <p class="hiddentext">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.middle-task {
  width: 55%;
  height: calc(100vh - 81px);
  float: left;
}

.all-task {
  width: 100%;
  height: 10%;
  display: block;
  border-bottom: 1px solid #dddddd;
}

.task-area {
  margin-left: 30px;
  width: 300px;
  display: inline-block;
  left: 0;
}

.task-header {
  font-size: 20px;
  font-weight: bold;
  line-height: 1rem;
}

.task-stat {
  font-size: 16px;
  color: rgb(128, 128, 128);
  line-height: 0.1rem;
}

.fold-area {
  width: 90px;
  height: 100%;
  display: block;
  float: right;
  right: 0;
  text-align: center;
  font-size: 0.6rem;
  line-height: 1;
}

.fold-area > .fa-stack {
  position: relative;
  cursor: pointer;
  margin-top: 25px;
  vertical-align: middle;
  color: #bbbbbb;
}

.add-task {
  width: 100%;
  height: 10%;
}

.task-list {
  width: 80%;
  height: 70%;
  margin: 0 auto;
  margin-top: 3%;
  border: 1px solid #dddddd;
}

.task-list label {
  display: block;
  background-color: #eeeeee;
  padding: 10px;
  color: #424242;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #ffffff;
}

.task-list p {
  color: #424242;
  padding: 10px;
  font-size: 0.8em;
  line-height: 1.7em;
  border-bottom: 1px solid #dddddd;
  visibility: hidden;
  opacity: 0;
  display: none;
  text-align: left;
  background-color: #ffffff;
  margin-top: 0px;
}

#tm:checked ~ .hiddentext {
  display: block;
  visibility: visible;
  opacity: 1;
}

input#tm {
  display: none;
  position: relative;
}
</style>
