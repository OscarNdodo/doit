<template>
  <div class="navbar">
    <h1>{{ user }}</h1>
    <ul>
      <h2>{{ user }}</h2>
      <a href="#" @click="logOut">Logout</a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    user: String,
  },
  methods: {
    logOut() {
      this.$emit("logOut");
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 999;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10%;
  background-color: #2a2c3c;
}
h1 {
  color: #eee;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  padding: 2px 10px;
  border: 1px solid #eeeeee3c;
  border-radius: 2px;
}
h2 {
  font-size: medium;
}
ul {
  /* width: 130px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0ecef;
  padding: 0 10px;
  border-radius: 4px;
}
a {
  text-decoration: none;
  background-color: #00c073;
  color: white;
  padding: 8px 20px;
  border-radius: 4px;
  transition: 0.5s;
  margin-left: 10px;
}
a:hover {
  background-color: #00c0739c;
}
</style>