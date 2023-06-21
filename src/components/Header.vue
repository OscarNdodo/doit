<template>
  <header>
    <div class="logo">
      <span :class="iconMenu" @click="openMenu"></span>
      <h1>doit</h1>
    </div>
    <div class="account">
      <i :class="loginIcon"></i>
      <button @click="getLogin" class="fa fa-user"></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
  props: {
    iconMenu: String,
    loginIcon: {
      type: String,
      default: "fa fa-sign-in"
    }
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    getLogin(){
        this.$emit("getLogin");
    },
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--black);
}

header .logo {
  width: 22%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

header .logo .fa {
  font-size: 1.2em;
  color: var(--white);
}

header .logo h1 {
  font-size: 1.5em;
  color: var(--green);
  font-family: monospace;
}

header .account {
  width: 15%;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--green);
  color: var(--white);
  border-radius: 4px;
}

header .account button {
  border: none;
  font-size: 1.1em;
  padding: 10px;
  background-color: var(--white);
  color: var(--black);
  font-weight: bold;
  border-radius: 4px;
}

header .account .fa {
  font-size: 1.2em;
  padding: 3px 8px;
}

header form {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header form input {
  width: 80%;
  font-size: 1.1em;
  padding: 2px 5px;
  border: none;
}

header form button {
  width: 20%;
  font-size: 1.3em;
  padding: 2px 5px;
  background-color: var(--green);
  color: var(--white);
  border: none;
}
</style>