<template>
  <p>{{new Intl.DateTimeFormat("en-US").format(new Date(date))}}</p>
</template>

<script>
export default {
  name: "DateFormat",
  props: {
    date: String
  }
}
</script>

<style scoped>

</style>