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
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup () {
    const counter = ref(2)
    const increment = () => counter.value ++
    const attending = ref(['Luigi','Rosita','Tomàs'])
    const placesLeft = computed(()=> counter.value - attending.value.length)
    return {counter, increment, placesLeft, attending}
  }
})
</script>

<style scoped>

</style>