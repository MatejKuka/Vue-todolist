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
    },
    deleteTask(id) {
      const task = this.tasks.find(task => task.id === id);
      this.deletedTasks.push(task);
      localStorage.removeItem("deletedTasks");
      localStorage.setItem("deletedTasks", JSON.stringify(this.deletedTasks));
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  },
  data() {
    return {
      tasks: [],
      deletedTasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: new Date(2022, 12, 19),
      },
      {
        id: 2,
        text: "Meeting with boss",
        day: new Date(2022, 12, 24),
      },
      {
        id: 3,
        text: "Food shopping",
        day: new Date(2022, 12, 5),
      }
    ]
  }
}
</script>

<style scoped>

</style>
