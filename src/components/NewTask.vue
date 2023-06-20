<template>
  <form>
    <input type="text" placeholder="Type the title here..." />
    <textarea rows="5" cols="30" placeholder="Type the description of the task..."></textarea>
    <button type="reset">Send <span class="fa fa-send"></span></button>
    <ol>
      <li><input type="checkbox" /><span>Ana Guimares</span></li>
      <li><input type="checkbox" /><span>Ana Guimares</span></li>
      <li><input type="checkbox" /><span>Ana Guimares</span></li>
      <li><input type="checkbox" /><span>Ana Guimares</span></li>
      <li><input type="checkbox" /><span>Ana Guimares</span></li>
      <li><input type="checkbox" /><span>Ana Guimares</span></li>
    </ol>
  </form>
</template>

<script>
export default {
    name: "NewTaskVue"
};
</script>

<style scoped>
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px;
    }

    form input, textarea, button{
        width: 100%;
        font-size: 1.1em;
        padding: 10px;
        border: none;
        outline: none;
    }

    form input{
        margin: 2px 0;
        border-radius: 4px;
    }

    form textarea{
        border-radius: 6px;
        margin: 5px 0;
    }

    form button{
        background-color: var(--green);
        color: var(--white);
        border-radius: 5px;
    }

    form ol{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 10px 0;
    }

    form ol li{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 5px 0;
    }

    form ol li input{
        width: 20px;
        background-color: var(--white);
        color: var(--green);
    }

    form ol li span{
        font-size: 1.2em;
        color: var(--white);
        margin-left: 10px;
    }

</style>