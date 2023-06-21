<template>
  <main>
    <div class="account" v-show="goLogin">
      <AccountVue @backLogin="backLogin" v-if="account" />
      <SiginVue @createAccount="createAccount" @login="login" v-else />
    </div>
    <div class="home" v-if="statusLogin === 'logged'">
      <HeaderVue
        @openMenu="openMenu"
        @getLogin="getLogin"
        :iconMenu="iconMenu"
        :loginIcon="loginIcon"
      />
      <MenuVue
        v-if="showMenu"
        @addNewTask="addNewTask"
        @showDoneTask="showDoneTask"
        @showPendentTask="showPendentTask"
        @showWarningTask="showWarningTask"
        @showUsers="showUsers"
      />
      <DashVue :typeTask="typeTask" :content="content" />
    </div>
    <div v-else-if="statusLogin === 'loginng'">
      <HeaderVue @getLogin="getLogin" v-show="!goLogin" />
      <GetStartedVue @getLogin="getLogin" v-show="!goLogin" />
    </div>
  </main>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import MenuVue from "./components/Menu.vue";
import GetStartedVue from "./components/GetStarted.vue";
import SiginVue from "./components/Sigin.vue";
import AccountVue from "./components/Account.vue";
import DashVue from "./components/Dash.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    MenuVue,
    GetStartedVue,
    SiginVue,
    AccountVue,
    DashVue,
  },
  data() {
    return {
      iconMenu: "fa fa-navicon",
      loginIcon: "fa fa-sign-in",
      showMenu: false,
      statusLogin: "loginng",
      typeTask: "fa fa-check-circle",
      content: "",
      goLogin: false,
      account: false,
    };
  },
  methods: {
    login(event) {
      const data = event;

      if (data.email === "ana@gmail.com" && data.password === "1234") {
        this.statusLogin = "logged";
        this.goLogin = false;
        this.loginIcon = "fa fa-sign-out";
      }
    },
    getLogin() {
      if (this.statusLogin === "logged") {
        this.goLogin = false;
        this.statusLogin = "loginng"
      } else {
        this.goLogin = true;
      }
    },
    createAccount() {
      this.account = true;
    },
    backLogin() {
      this.account = false;
    },
    openMenu() {
      if (this.iconMenu === "fa fa-navicon") {
        this.iconMenu = "fa fa-close";
        this.showMenu = true;
      } else {
        this.iconMenu = "fa fa-navicon";
        this.showMenu = false;
      }
    },
    addNewTask() {
      this.content = "new";
      this.openMenu();
    },
    showDoneTask(event) {
      this.content = "";
      this.typeTask = event;
      this.openMenu();
    },
    showPendentTask(event) {
      this.content = "";
      this.typeTask = event;
      this.openMenu();
    },
    showWarningTask(event) {
      this.content = "";
      this.typeTask = event;
      this.openMenu();
    },
    showUsers() {
      this.content = "users";
      this.openMenu();
    },
  },
};
</script>

<style>
</style>