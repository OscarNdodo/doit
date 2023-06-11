<template>
  <div>
    <NavBar @logOut="showLogin" v-if="logado" :user="user" />
    <sigin-vue
      @logado="hideLogin"
      @createAccount="create"
      v-else
      v-show="haveAccount"
    />
    <Account v-show="!haveAccount" @backLogin="backLogin" />
    <div v-if="logado" class="container">
      <form>
        <AddToDoVue @addTask="addNewTask" />
      </form>
      <div class="list">
        <ListVue :text="textTask" />
      </div>
    </div>
  </div>
</template>

<script>
import AddToDoVue from "./components/AddToDo.vue";
import ListVue from "./components/List.vue";
import NavBar from "./components/NavBar.vue";
import SiginVue from "./components/Sigin.vue";
import Account from "./components/Account.vue";


export default {

  name: "App",
  components: {
    NavBar,
    SiginVue,
    Account,
    AddToDoVue,
    ListVue,
  },
  data() {
    return {
      logado: false,
      haveAccount: true,
      textTask: "",
      user: "",
    };
  },
  methods: {
    hideLogin($event) {
      this.logado = true;
      this.user = $event;
    },
    showLogin() {
      this.logado = false;
    },
    addNewTask($evt) {
      this.textTask = $evt;

    },
    create() {
      this.haveAccount = false;
    },
    backLogin($event) {
      this.haveAccount = true;
      $event === "logado"
        ? (this.haveAccount = true)
        : (this.haveAccount = false);
    },
  },
};
</script>

<style>
body {
  background-color: #2a2c3c;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: 1s;
}
.container {
  width: 80%;
  left: 20%;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
}

.container from {
  width: 20%;
}

.container .list {
  width: 80%;
  margin-left: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
</style>