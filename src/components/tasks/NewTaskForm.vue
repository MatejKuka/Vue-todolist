<template>
  <form @submit="onSubmit">
    <div>
      <label>Name:</label>
      <input
          v-model="text"
          type="text"
          name="text"></div>
    <div>
      <label>Deadline:</label>
      <input
          v-model="day"
          type="date"
          name="date">
    </div>
    <button>Create</button>
  </form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      text: "",
      day: ""
    }
  },
  methods:{
    onSubmit(e){
      e.preventDefault();

      if(!this.text){
        alert("Add task!");
        return;
      }
      const newTask = {
        id: Math.floor(Math.random() * 100),
        text: this.text,
        day: new Date(this.day)
      }
      this.$emit("create-task", newTask);
    }
  },
}
</script>

<style scoped>
form {
  padding: 0.5rem 0;
}
div {
  margin: 0.5rem
}
label {
  margin-right: 0.5rem;
}
</style>