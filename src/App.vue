<template>
  <div class="bodyclass">
    <HeaderTodo title="Todo List Tracker"/>
    <TaskForm @create-task="createTask"/>
    <TasksList @delete-task="deleteTask" :tasks="tasks"/>
  </div>
</template>

<script>
import HeaderTodo from "./components/UI/Header";
import TasksList from "./components/tasks/Tasks";
import TaskForm from "./components/tasks/NewTaskForm";

export default {
  name: 'App',
  components: {
    HeaderTodo,
    TasksList,
    TaskForm
  },
  methods: {
    createTask(newTask) {
      this.tasks.push(newTask);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  },
  data() {
    return {
      tasks: []
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bodyclass {
  background: burlywood;
  padding: 0.6rem;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
}
</style>
