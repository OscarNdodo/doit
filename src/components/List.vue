<template>
  <div class="list">
    <!-- <h3>Tasks List To Do</h3> -->
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span @click="taskDone">OK</span>
        {{ task }}
        <span @click="closeTask" class="delete">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List-to-do",
  props: {
    text: String,
  },
  data() {
    return {
      tasks: [],
    };
  },
  watch: {
    text(){
      this.loading()
    }
  }
  ,
  methods: {
    loading(){
       if (this.text != "") {
        this.tasks.push(this.text);
      }
    },
    taskDone($event) {
      $event.target.parentElement.classList.toggle("done")
    },
    closeTask($event) {
      $event.target.parentElement.remove();
    },
  },
};
</script>

<style scoped>
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* background-color: #36384a; */
  padding: 10px;
}
span {
  padding: 2px 6px;
  color: #095eb3;
  font-size: 18px;
  cursor: pointer;
  margin: 4px;
}
.delete {
  padding: 2px 6px;
  color: orangered;
  font-size: 18px;
  cursor: pointer;
  border: none;
}
.list ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.list ul li {
  list-style: none;
  width: 95%;
  margin-left: -30px;
  box-shadow: 0 0 5px #1a1c2a;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #36384a;
  justify-content: space-between;
  color: #fefefe;
  border-radius: 5px;
  margin-bottom: 15px;
}

.list ul .done {
  color: #464756;
}
</style>