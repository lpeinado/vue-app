<template>
  <section class="explanation">
    <h2>TO-DO list manager</h2>
    <p>With this app you'll be able to:</p>
    <ul>
      <li>Create a new, unique "to do" item</li>
      <li>Edit a "to do"</li>
      <li>Delete an existing "to do" item</li>
      <li>View the list of "to do's" and check/uncheck them as "done"</li>
      <li>Filter the list</li>
      <li>{{ providedString }}</li>
    </ul>
  </section>
</template>
<script>
  export default {
    inject:['providedString']
  }
</script>
<style scoped lang="scss">
  .explanation{
    ul {
      margin: 0 auto;
    }
    li {
      text-align: left;
    }
  }
</style>