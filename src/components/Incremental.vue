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
import { defineComponent } from 'vue'
import myModule from '../modules/myModule'

export default defineComponent({
  setup () {
    return myModule()
  }
})

</script>

<style scoped>

</style>