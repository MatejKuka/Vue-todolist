<template>
  <h2>Todo list</h2>
  <TaskForm @create-task="createTask"/>
  <TasksList @delete-task="deleteTask" :tasks="tasks"/>
</template>

<script>
import TasksList from "@/components/tasks/Tasks";
import TaskForm from "@/components/tasks/NewTaskForm";

export default {
  name: "HomePage",
  components: {
    TasksList,
    TaskForm
  },
  methods: {
    createTask(newTask) {
      this.tasks.push(newTask);
      localStorage["tasks"] = JSON.stringify(this.tasks)
    },
    deleteTask(id) {
      const task = this.tasks.find(task => task.id === id);
      this.deletedTasks.push(task);
      this.tasks = this.tasks.filter((task) => task.id !== id);
      localStorage["deletedTasks"] = JSON.stringify(this.deletedTasks)
      localStorage["tasks"] = JSON.stringify(this.tasks);
    }
  },
  data() {
    return {
      tasks: [],
      deletedTasks: []
    }
  },
  created() {
    this.tasks = JSON.parse(localStorage["tasks"] || "[]")
  }
}
</script>

<style scoped>

</style>
