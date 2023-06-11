<template>
  <div class="todo">
    <input type="text" name="todo" v-model="text" placeholder="Type here...">
    <button @click.prevent="addTask">Add</button>
  </div>
</template>

<script>
export default {
    name: "AddToDo",
    data(){
        return{
            text: ""
        }
    },
    methods: {
        addTask(){
            this.$emit("addTask", this.text)
            this.text = ""

        }
    }
}
</script>

<style scoped>
    .todo{
        position: fixed;
        top: 250px;
        /* width: 100px; */
        left: 150px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .todo input{
        outline: none;
        border: none;
        font-size: 20px;
        width: 80%;
        padding: 12px 8px;
        border-radius: 4px 0 0 4px;
        font-weight: bold;
    }
    .todo button{
        width: 20%;
        height: 100%;
        padding: 13.5px 5px;
        border: none;
        font-size: 17px;
        border-radius:  0 3px 3px 0;
        background-color: #00c073;
        color: #fff;
    }
</style>