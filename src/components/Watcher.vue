<template>
  <div class="watcher">
    Whatches and counts:
    <input type="text" name="watched" v-model="watchedThing" />
    <span>{{count}}</span>

  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'

export default defineComponent({
  setup () {
    const watchedThing = ref("")
    const count = ref()
    watch(watchedThing, () => count.value = watchedThing.value.length, { immediate:true })

    return {watchedThing, count}
  }
})
</script>

<style scoped>
.watcher{
  border: 1px solid grey;
  padding: 10px;
}
</style>