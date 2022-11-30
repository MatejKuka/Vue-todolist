<template>
  <p>{{new Intl.DateTimeFormat("en-US").format(date)}}</p>
</template>

<script>
export default {
  name: "DateFormat",
  props: {
    date: Date,
  }
}
</script>

<style scoped>

</style>