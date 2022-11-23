<template>
  <div class="container">
    <Explanation />
    <section class="todo-list" v-if="todoList.length">
      <form action="#" class="todo-form" @submit.prevent="addTodo">
        <input v-model="todoInput" type="text" placeholder="Please type here a new ToDo item ...">
      </form>
      <ul>
        <li v-for="todo in visibleItems" :key="todo.id">
          <ToDoItem :todo="todo" @delete-todo="deleteTodo"/>
        </li>
      </ul>
    </section>
    <section v-else class="no-items">All clear! Add any ToDo item in the form to continue.</section>
    <FilteringTool @filter-items="(filter) => appliedFilter = filter" />
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue'
import ToDoItem from './ToDoItem.vue'
import Explanation from './Explanation.vue'
import FilteringTool from './FilteringTool.vue'

interface TodoItem {
  id: number;
  caption: string;
  isChecked: boolean; 
}
type FilterType = "all"|"checked"|"unchecked"


export default {
  name: 'ToDo',
  components: {
    ToDoItem, Explanation, FilteringTool
  },
  setup() {
    const todoInput =  ref<string>('')
    const nextTodoId = ref(4)
    const appliedFilter = ref<FilterType>("all")
    const todoList = ref<TodoItem[]>([]) 

    const loadInitialData = async () => {
      const response = await fetch("../mocks/initialTodos.json");
      const intialData = await response.json();
      todoList.value = intialData.todos;
    }

    const visibleItems = computed(():TodoItem[] => {
      if (appliedFilter.value === "all") return todoList.value
      if (appliedFilter.value === "checked") return todoList.value.filter(item => item.isChecked === true)
      if (appliedFilter.value === "unchecked") return todoList.value.filter(item => item.isChecked === false)
    })

    function addTodo(): void {
      const newTodo: TodoItem = {
        id: nextTodoId.value,
        caption: todoInput.value,
        isChecked: false,
      }
      todoList.value.push(newTodo)
      todoInput.value = ''
      nextTodoId.value ++
    }

    function deleteTodo(id: number): void {
      todoList.value = todoList.value.filter((todo: TodoItem) => todo.id !== id)
    }

    onMounted(() => {
      loadInitialData()
    })

    return { todoInput, todoList, addTodo, deleteTodo, visibleItems, appliedFilter }
  }
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  section { 
    display: flex;
    flex-direction: column;
  }
  .todo-list {
    ul {
      margin: 0px auto;
      padding: 10px;
      min-width: 300px;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    form input {
      padding: 7px;
      width: 250px;
    }
  }
  .todo-form, .no-items{
    margin-top: 30px;
  }
}
</style>