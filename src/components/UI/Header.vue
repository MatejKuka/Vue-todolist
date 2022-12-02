<template>
  <header>
    <h1>{{ title }}</h1>
    <div>
      <button><a href="/deleted-todos">Deleted Todos page</a></button>
      <button><a href="/">Todos page</a></button>
    </div>
  </header>
</template>

<script>

export default {
  name: "HeaderTodo",
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

button {
  text-underline: none;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-height: 3rem;
  transition: all 250ms;
  width: auto;
  padding: 0 0.7rem;
  margin: 0 0.5rem
}
a {
  text-decoration: none;
}

button:hover,
button:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
</style>