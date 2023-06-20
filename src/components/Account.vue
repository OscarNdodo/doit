<template>
  <div class="main">
    <div class="login">
      <h2>Account</h2>
      <p @click="backLogin" :class="status">{{ statusText }}</p>
      <form @submit.prevent="create">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          placeholder="Type your full name"
          required
          aria-autocomplete="none"
          autocomplete="none"
        />
        <label for="emailAccount">Email</label>
        <input
          type="email"
          name="emailAccount"
          id="emailAccount"
          v-model="emailAccount"
          placeholder="Type your e-mail"
          required
          aria-autocomplete="none"
          autocomplete="none"
        />
        <label for="passwordAccount">Password</label>
        <input
          type="password"
          name="passwordAccount"
          id="passwordAccount"
          v-model="passwordAccount"
          placeholder="Type your password"
          aria-autocomplete="none"
          autocomplete="none"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "A-ccount",
  data() {
    return {
      name: "",
      emailAccount: "",
      passwordAccount: "",
      status: "",
      statusText: "I already have a account",
    };
  },
  methods: {
    backLogin() {
      this.$emit("backLogin", "logado");
    },
    /*create() {
      const data = {
        name: this.name,
        email: this.emailAccount,
        password: this.passwordAccount,
      };
    },*/
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
  animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
.status {
  color: #00c073;
  transition: 0.5s;
}
.error {
  color: #ee4b4b;
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
.login form input[type="email"],
input[type="text"] {
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
</style>