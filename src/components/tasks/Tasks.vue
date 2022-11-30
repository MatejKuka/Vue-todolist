<template>
<div v-for="task in tasks" :key="task.id">
  <TaskItem @delete-task="$emit('delete-task', task.id)" :task="task" />
</div>
</template>

<script>
import TaskItem from "./Task";

export default {
  name: "TasksList",
  components: {
    TaskItem,
  },
  emits: ["delete-task"],
  props: {
    tasks: Array
  }
}
</script>

<style scoped>

</style>