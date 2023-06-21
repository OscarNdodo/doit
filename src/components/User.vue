<template>
  <section>
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user" />
      <p class="name">Ana Guimares</p>
      <button>Nova Tarefa</button>
    </div>
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user" />
      <p class="name">Ana Guimares</p>
      <button>Nova Tarefa</button>
    </div>
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user" />
      <p class="name">Ana Guimares</p>
      <button>Nova Tarefa</button>
    </div>
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user" />
      <p class="name">Ana Guimares</p>
      <button>Nova Tarefa</button>
    </div>
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user" />
      <p class="name">Ana Guimares</p>
      <button>Nova Tarefa</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserVue",
};
</script>

<style scoped>
img {
  width: 180px;
}

section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
  margin-bottom: 10px;
}

section .user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px #222;
  padding: 10px 5px;
  margin-top: 40px;
}

section .user p {
  padding: 8px;
  color: var(--white);
}

section .user button {
  width: 100%;
  font-size: 1.1em;
  padding: 2px;
  border: none;
  background-color: var(--green);
  color: var(--white);
  border-radius: 10px;
}
</style>