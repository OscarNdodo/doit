<template>
  <div>
    <NavBar @logOut="showLogin" v-if="logado" :user="user" />
    <SiginVue
      @login="login"
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
import api from "./config/api";

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
      textTask: [],
      user: "",
      userId: ""
    };
  },
  methods: {
    hideLogin() {
      this.logado = true;
    },
    showLogin() {
      this.logado = false;
    },
    addNewTask($evt) {
      this.store(this.textTask = $evt, this.userId);
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
    login($event) {
      this.api($event);
    },
    //Query
    api(values) {
      // User
      api
        .post("/login", values)
        .then((response) => response.data.user)
        .then((data) => {

            this.userId = data[0].id;
            //Tasks
            this.tasks(data[0].id);

            this.user = data.name;
          if ( values.email === data.email && values.password === data.password ) {

            this.logado = false;

          } else {
            this.logado = true;
          }
        })
        .catch((error) => console.log(error));
    },
    tasks(id) {
      api.get(`/user/${id}/tasks`)
      
        .then((response) => response.data.user.tasks)
        .then((tasks) => {
            tasks.map((value) => {
                setTimeout(() =>{
                    this.textTask = value.title
                },100)
            })
        })
        .catch((error) => console.log("Tasks error: " + error));
    },
    store(value, userId){
        const user_id = userId
        const data = {
            title: value,
            content: "Yet empty",
        }
        api.post(`/user/${user_id}/tasks`, data)
        // .then((response) => console.log(response))
        .catch((error) => console.log(error))

    }
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