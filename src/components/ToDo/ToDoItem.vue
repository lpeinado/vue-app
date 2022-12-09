<template>
  <div class="todo-content">
    <input type="checkbox" v-model="todo.isChecked">
    <span
      v-show="!editing"
      :class="{'checked-item' : todo.isChecked}"
      data-test=todo-label
    >
      {{ todo.caption }}
    </span>
    <span v-show="editing" >
      <input v-model="todo.caption"
             @keydown.enter="editing=false"
             type="text" >
    </span>

  </div>
  <div class="controls">
    <button class="edit-button" @click="editing=!editing">{{ editing? 'Save':'Edit' }}</button>
    <button @click="$emit('deleteTodo', todo.id)">X</button>
  </div>
</template>

<script lang="ts">
import {ref}  from 'vue'
export default({
  name: 'ToDoItem',
  props: ['todo'],
  emits: ['deleteTodo'],
  setup () {
    const editing = ref<boolean>(false)
    return { editing}
  }
})
</script>

<style lang="scss" scoped>
  .todo-content {
    display: flex;
  }
  .checked-item {
    text-decoration: line-through;
  }
  .controls{
    .edit-button{
      margin-right: 10px;
    }
  }

</style>