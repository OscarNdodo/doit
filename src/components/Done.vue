<template>
  <section>
    <ul>
      <li>
        <div class="status">
          <img src="../assets/images/user.jpg" alt="user" />
          <p class="name">Ana Guimares</p>
          <span :class="task"></span>
        </div>
        <span class="text">Uma nova tarefa</span>
      </li>
      <li>
        <div class="status">
          <img src="../assets/images/user.jpg" alt="user" />
          <p class="name">Ana Guimares</p>
          <span :class=task></span>
        </div>
        <span class="text"
          >Uma nova tarefadssssssssssss jkdfs lsajdlasjkdlajdlsa lffiwoaeuioajsa
          safjasklfjklas aslfjklasjdfkla sddklfjsd fsaiufwoei sdssssssssssssss
          dsssssssssssss fffffffffffff</span
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "DoneVue",
  props: {
    task: String
  },
  
};
</script>

<style scoped>
img {
  width: 25px;
  border-radius: 5px;
}
section {
  width: 100%;
  padding: 10px;
}

section ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

section ul li {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 6px;
  box-shadow: 0 0 5px #01051690;
}

section ul li .status {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
}

section ul li .status p {
  margin: 0 5px;
  color: var(--green);
}

section ul li .fa {
  color: var(--white);
  font-size: 1em;
  margin-left: 5px;
}

section ul li .text {
  color: var(--white);
  font-weight: 300;
  font-size: 1.2em;
  padding: 5px 0;
}
</style>