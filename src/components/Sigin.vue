<template>
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
</template>

<script>
import axios from "axios";
export default {
  name: "Sig-in",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("http://localhost:1516/login/", data)
        .then((response) => response.data.user[0])
        .then((user) => {
          console.log(user);
          if (this.email === user.email && this.password === user.password) {
            setTimeout(() => {
              this.$emit("logado", user.name);
            }, 1000);
          } else {
            this.error = "error";
            setTimeout(() => {
              this.error = "";
            }, 2000);
          }
        })
        .catch((error) => {
          this.error = "error";
          setTimeout(() => {
            this.error = "";
          }, 2000);
          console.log(error);
        });
    },
    createAccount() {
      this.$emit("createAccount");
    },
  },
};
</script>

<style scoped>
.login {
  position: fixed;
  left: 40%;
  top: 120px;
  width: 260px;
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
  width: 95%;
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