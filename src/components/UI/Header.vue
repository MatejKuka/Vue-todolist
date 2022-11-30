<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonComponent text="Add New Task" color="green"/>
  </header>
</template>

<script>
import ButtonComponent from "./Button";

export default {
  name: "HeaderTodo",
  components: {ButtonComponent},
  props: {
    title: String
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>