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
  methods: {
    addDeletedTask(taskToDelete){
      this.deletedTasks.push(taskToDelete);
    }
  },
  data() {
    return {
      deletedTasks: []
    }
  },
  created() {
    this.deletedTasks = [
      {
        id: 8,
        text: "This is deleted task n.1",
        day: new Date(2022, 2, 14)
      },
      {
        id: 12,
        text: "This is deleted task n.2",
        day: new Date(2022, 2, 14)
      },
      {
        id: 10,
        text: "This is deleted task n.3",
        day: new Date(2022, 2, 14)
      },
    ]
  }
}
</script>

<style scoped>

</style>