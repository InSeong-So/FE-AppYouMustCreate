<template>
  <div class="box">
    <h1 align="center">Login Form</h1>
    <form role="form" method="post" @submit.prevent="login">
      <div class="inputBox">
        <input
          type="text"
          name="username"
          autocomplete="off"
          required
          v-model="username"
        />
        <label>Username</label>
      </div>
      <div class="inputBox">
        <input
          type="password"
          name="password"
          autocomplete="off"
          required
          v-model="password"
        />
        <label>Password</label>
      </div>
      <input type="submit" name="login" value="로그인" />
      <p class="warnning">{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  created() {},
  methods: {
    async login() {
      try {
        this.logMessage = '';
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.username = '';
        this.password = '';
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url(http://promac.epizy.com/login.jpg);
  background-size: cover;
}

a {
  color: #fff;
  margin-left: 2%;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.box h1 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}
.box .inputBox {
  position: relative;
}
.box .inputBox input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 1px;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}
.register {
  color: #03a9f4;
}
.box input[type='submit'] {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.warnning {
  color: orange;
}
</style>
