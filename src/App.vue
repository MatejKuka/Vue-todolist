<template>
  <div class="body-class">
    <HeaderTodo title="Todo List Tracker"/>
    <router-view/>
  </div>
</template>

<script>
import HeaderTodo from "./components/UI/Header";

export default {
  name: 'App',
  components: {
    HeaderTodo,
  },
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

.body-class {
  background: burlywood;
  padding: 0.6rem;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
}
</style>
