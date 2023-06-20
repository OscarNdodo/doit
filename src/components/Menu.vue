<template>
  <aside class="menu">
    <div class="user">
      <img src="../assets/images/user.jpg" />
      <h3>Ze Ninguem</h3>
    </div>
    <form action="#">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search here..."
      />
      <button class="fa fa-search"></button>
    </form>
    <ul>
      <li @click="addNewTask">
        <span class="fa fa-plus-circle"></span> Nova Tarefa
      </li>
      <li @click="showPendentTask">
        <span class="fa fa-play-circle"></span> Pendentes
      </li>
      <li @click="showDoneTask">
        <span class="fa fa-check-circle"></span> Concluidas
      </li>
      <li @click="showWarningTask">
        <span class="fa fa-warning"></span> Atrasadas
      </li>
      <li @click="showUsers"><span class="fa fa-users"></span> Inscritos</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "MenuVue",
  methods: {
    addNewTask() {
      this.$emit("addNewTask");
    },
    showPendentTask() {
      this.$emit("showPendentTask", "fa fa-play-circle");
    },
    showDoneTask() {
      this.$emit("showDoneTask", "fa fa-check-circle");
    },
    showWarningTask() {
      this.$emit("showWarningTask", "fa fa-warning");
    },
    showUsers() {
      this.$emit("showUsers");
    },
  },
};
</script>

<style scoped>
.menu {
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 20px;
  background-color: var(--black);
  box-shadow: 0 0 10px #10141f;
  animation: animMenu 1s ease-in-out;
}

@keyframes animMenu {
  from {
    margin-left: -500px;
  }
}

.menu .user {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  color: var(--white);
}

.menu .user img {
  width: 80px;
  border-radius: 100%;
  margin-bottom: 5px;
}

.menu form {
  width: 80%;
  margin-top: 5px;
  margin-left: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu form input {
  width: 80%;
  font-size: 1.2em;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 3px 0 0 3px;
}

.menu form button {
  border-radius: 0 3px 3px 0;
  width: 20%;
  font-size: 1.3em;
  padding: 7px;
  background-color: var(--green);
  color: var(--white);
  border: none;
}

.menu ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  padding-left: 5%;
}

.menu ul li {
  border-radius: 3px;
  width: 87%;
  font-size: 1.2em;
  color: var(--white);
  padding: 10px 10px;
  margin: 5px 0;
  cursor: pointer;
}

.menu ul li:hover {
  background-color: #10141fb3;
}

.menu ul li .fa {
  margin-right: 10px;
  color: var(--green);
}
</style>