<template>
  <section>
    <div class="filtering-tools-header">You can filter the ToDo items by:</div>
    <div class="filters">
      <span v-for="option in options" key="option">
        <input type="radio" id="all" name="filterItems" @change="$emit('filterItems', option)"  :checked= "option === 'all'" />
        <label for="all">{{ option }}</label>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
  export default({
    name: 'FilteringTool',
    emits: ['filterItems'],
    setup () {
      const options = ['all','checked','unchecked'];
      return { options }
    }
  })
</script>

<style lang="scss" scoped>
  .filtering-tools-header {
    margin-top:50px;
    padding:10px;
    font-weight: bold;
  }
  .filters {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: auto;
    label { 
      text-transform: capitalize;
    }
  }
</style>
