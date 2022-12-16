<template>
  Sets title:
  <input type="text" v-model="title">
  <ToDo />
</template>

<script>
import ToDo from './components/ToDo.vue'
import {useTitle} from '@vueuse/core'

export default {
  name: 'App',
  setup () {
    const title = useTitle("Initial")
    return {title}
  },
  components: {
    ToDo
  }
}
</script>
