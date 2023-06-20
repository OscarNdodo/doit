<template>
  <div class="main">
    <div class="login">
      <h2>Login</h2>
      <p @click="createAccount">I want create a new account</p>
      <form @submit.prevent="login">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          :class="error"
          placeholder="Type your e-mail"
          required
          autocomplete="none"
        />

        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          :class="error"
          v-model="password"
          placeholder="Type your password"
          required
          autocomplete="none"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiginVue",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    createAccount() {
      this.$emit("createAccount");
    },
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      this.$emit("login", data);
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd38;
  padding: 10px;
  border-radius: 3px;
  transition: 1s;
}
.login:hover {
  transform: rotate(3deg);
}
h2 {
  text-transform: uppercase;
  font-size: 1.6rem;
  color: #00c073;
  margin: 0;
}
p {
  cursor: pointer;
  color: white;
  text-decoration: underline;
  margin: 10px 0;
}
.login form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.login form label {
  margin-bottom: 5px;
  font-size: 18px;
  color: #eeeeee;
}
.login form input {
  width: 100%;
  font-size: 18px;
  outline: none;
  padding: 10px 6px;
  border: none;
  border-radius: 3px;
  letter-spacing: 2px;
  word-spacing: 1px;
}
.login form input[type="email"] {
  margin-bottom: 20px;
}
.login form button {
  width: 100%;
  border: 1px solid #00c073;
  background-color: #00c073;
  color: #ffffff;
  font-size: 18px;
  margin: 20px 0;
  transition: 0.5s;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
}
.login form button:hover {
  background-color: transparent;
  color: #00c073;
}
.login form .error {
  border: 2px solid #ec0542;
}
</style>