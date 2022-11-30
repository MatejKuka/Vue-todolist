<template>
  <div class="task-container flex">
    <div>
      <h3>{{ task.text }}</h3>
      <DateFormat :date="task.day"/>
    </div>
    <img @click="onDelete(task.id)" class="delete-image" src="../../assets/trash-solid.svg" alt="delete picture">
  </div>
</template>

<script>
import DateFormat from "../UI/Date-format";

export default {
  name: "TaskItem",
  components: {DateFormat},
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id)
    }
  }
}
</script>

<style scoped>
.task-container {
  background: #f4f4f4;
  margin: 8px;
  padding: 2px 20px;
  border-radius: 10px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.delete-image {
  width: 20px;
  height: 20px;
}

.delete-image:hover {
  cursor: pointer;
}
</style>