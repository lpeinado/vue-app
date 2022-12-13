<template>
  <div>
    <p>{{ counter }}</p>
    <button type="button" @click="increment">Incr. counter</button>
    <div v-for="(value, key) in attending" :index="key">
      Person attending: {{ value }}
    </div>
    Places left: <span style="color:red"> {{placesLeft}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'

export default defineComponent({
  setup () {
    const event = reactive({
      counter:14,
      attending:['Luigi','Rosita','Tomàs'],
      placesLeft: computed(()=> event.counter - event.attending.length)
    })
    const increment = () => event.counter ++
    return { ...toRefs(event), increment}
  }
})
</script>

<style scoped>

</style>