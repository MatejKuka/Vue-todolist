<template>
  <h1>Deleted Todos: </h1>
  <TasksList :tasks="deletedTasks" />
</template>

<script>
import TasksList from "@/components/tasks/Tasks";

export default {
  name: "DeletedTodos",
  components: {
    TasksList,
  },
  data() {
    return {
      deletedTasks: []
    }
  },
  created() {
    this.deletedTasks = JSON.parse(localStorage.getItem("deletedTasks") || "[]")
  }
}
</script>

<style scoped>

</style>