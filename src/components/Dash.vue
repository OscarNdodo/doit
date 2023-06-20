<template>
  <section>
    <NewTaskVue v-if="content === 'new' " />
    <UserVue v-else-if="content === 'users' " />
    <DoneVue v-else :task="task" />
  </section>
</template>

<script>
import NewTaskVue from "./NewTask.vue";
import DoneVue from "./Done.vue";
import UserVue from "./User.vue";
export default {
  name: "DashVue",
  components: {
    NewTaskVue,
    DoneVue,
    UserVue,
  },
  props: {
    typeTask: String,
    content: String,
  },
  data() {
    return {
      task: "fa fa-check-circle",
    };
  },
  watch: {
    typeTask() {
      this.task = this.typeTask;
    },
  },
};
</script>

<style>
</style>