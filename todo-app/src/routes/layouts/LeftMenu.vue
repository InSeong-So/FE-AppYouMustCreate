<template>
  <div class="leftMenu">
    <div class="menuList">
      <ul v-for="(item, index) in menuList" :key="index">
        <li>
          <div class="checkbox">
            <label :for="'checkbox' + index">
              <input
                :id="'checkbox' + index"
                type="checkbox"
                @change="menuCheck"
              />
              <span
                class="checkbox-material"
                :class="[index == 0 ? 'allCheck' : '']"
              >
                <span class="check"></span>
              </span>
              {{ item.name }}
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div class="addList">
      <div class="addBox">
        <i class="fas fa-list-ul fa-2x">
          <span>Add List</span>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        borderBottom: '1px solid #dddddd',
      },
      menuList: [
        { name: 'All Tasks' },
        { name: 'Shopping' },
        { name: 'Cleaning' },
        { name: 'Books to Read' },
        { name: 'Movies to See' },
      ],
    };
  },
  methods: {
    menuCheck(event) {
      console.log(event);
    },
  },
};
</script>

<style scoped>
.leftMenu {
  width: calc(15% - 1px);
  height: calc(100vh - 81px);
  float: left;
  border-right: 1px solid #dddddd;
}

.menuList {
  width: 100%;
  height: 90%;
}

.menuList ul {
  list-style: none;
  margin: 16px;
}

.menuList > ul:nth-child(1) {
  border-radius: 10px;
  background-color: #42bdff;
  color: #ffffff;
}

.addList {
  width: 100%;
  height: 7%;
  margin-top: 3%;
  border-top: 1px solid #dddddd;
}

.addBox {
  text-align: center;
  width: 100%;
  height: 100%;
}

.addBox i {
  margin: 20px auto;
  font-size: 16px;
  color: #2faef8;
}

.addBox i span {
  margin-left: 16px;
  color: #000000;
}
/*====================================================================================*/
.checkbox {
  display: inline-block;
  padding: 10px 20px;
  transform: translateZ(0);
}

.checkbox label {
  cursor: pointer;
  padding-left: 0;
}

.checkbox input[type='checkbox'] {
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  left: 0;
  pointer-events: none;
}
.checkbox .checkbox-material {
  vertical-align: middle;
  position: relative;
  margin-right: 10px;
}
.checkbox .checkbox-material:before {
  position: absolute;
  left: 8px;
  top: 2px;
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
  height: 4px;
  width: 4px;
  border-radius: 100%;
  z-index: 1;
  opacity: 0;
  margin: 0;
}
.checkbox .checkbox-material .check {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
}
.checkbox .checkbox-material .check:before {
  position: absolute;
  content: '';
  transform: rotate(45deg);
  display: block;
  margin-top: -2px;
  margin-left: 8px;
  width: 0;
  height: 0;
  box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
    0 0 0 0 inset;
  -webkit-animation: checkbox-off 0.3s forwards ease-out;
  animation: checkbox-off 0.3s forwards ease-out;
}
.checkbox input[type='checkbox']:focus + .checkbox-material .check:after {
  opacity: 0.2;
}
.checkbox input[type='checkbox']:checked + .checkbox-material .check:before {
  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
    -5px 5px 0 10px, 20px -12px 0 11px;
  -webkit-animation: checkbox-on 0.3s forwards ease-out;
  animation: checkbox-on 0.3s forwards ease-out;
}
.checkbox input[type='checkbox']:not(:checked) + .checkbox-material:before {
  -webkit-animation: rippleOff 900ms forwards ease-out;
  animation: rippleOff 900ms forwards ease-out;
}
.checkbox input[type='checkbox']:checked + .checkbox-material:before {
  -webkit-animation: rippleOn 900ms forwards ease-out;
  animation: rippleOn 900ms forwards ease-out;
}
.checkbox
  input[type='checkbox']:not(:checked)
  + .checkbox-material
  .check:after {
  -webkit-animation: rippleOff 900ms forwards ease-out;
  animation: rippleOff 900ms forwards ease-out;
}

.checkbox input[type='checkbox']:checked + .checkbox-material .check:after {
  -webkit-animation: rippleOn 900ms forwards ease-out;
  animation: rippleOn 900ms forwards ease-out;
}

.checkbox
  input[type='checkbox'][disabled]:not(:checked)
  ~ .checkbox-material
  .check:before,
.checkbox input[type='checkbox'][disabled] + .circle {
  opacity: 0.5;
}
.checkbox input[type='checkbox'][disabled] + .checkbox-material .check:after {
  background-color: rgba(0, 0, 0, 0.84);
  transform: rotate(-45deg);
}

.checkbox-material .check {
  color: #2faef8;
}

.checkbox-material:before {
  background-color: #2faef8;
}

input[type='checkbox']:checked + .checkbox-material .check {
  color: #2faef8;
}

.checkbox-material.allCheck .check {
  color: #ffffff;
}

.checkbox-material.allCheck:before {
  background-color: #ffffff;
}

input[type='checkbox']:checked + .checkbox-material.allCheck .check {
  color: #ffffff;
}

@-webkit-keyframes checkbox-on {
  0% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 15px 2px 0 11px;
  }
  50% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px 2px 0 11px;
  }
  100% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px;
  }
}
@keyframes checkbox-on {
  0% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 15px 2px 0 11px;
  }
  50% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px 2px 0 11px;
  }
  100% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px;
  }
}
@-webkit-keyframes checkbox-off {
  0% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;
  }
  25% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;
  }
  50% {
    transform: rotate(45deg);
    margin-top: -2px;
    margin-left: 8px;
    width: 0px;
    height: 0px;
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 15px 2px 0 11px, 0 0 0 0 inset;
  }
  51% {
    transform: rotate(0deg);
    margin-top: 0px;
    margin-left: 0px;
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
      0px 0px 0 10px inset;
  }
  100% {
    transform: rotate(0deg);
    margin-top: 0px;
    margin-left: 0px;
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
      0px 0px 0 0px inset;
  }
}
@keyframes checkbox-off {
  0% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;
  }
  25% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;
  }
  50% {
    transform: rotate(45deg);
    margin-top: -2px;
    margin-left: 8px;
    width: 0px;
    height: 0px;
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 15px 2px 0 11px, 0 0 0 0 inset;
  }
  51% {
    transform: rotate(0deg);
    margin-top: 0px;
    margin-left: 0px;
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
      0px 0px 0 10px inset;
  }
  100% {
    transform: rotate(0deg);
    margin-top: 0px;
    margin-left: 0px;
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
      0px 0px 0 0px inset;
  }
}
@-webkit-keyframes rippleOn {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13, 13);
  }
}
@keyframes rippleOn {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13, 13);
  }
}
@-webkit-keyframes rippleOff {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13, 13);
  }
}
@keyframes rippleOff {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13, 13);
  }
}
</style>
