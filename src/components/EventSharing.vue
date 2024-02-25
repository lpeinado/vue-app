<template>
  <div>
    <input type="text" v-model="myValue" />
    <p>Numeric value of the input is: {{numericValue}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import eventApi from "../api/event";

export default defineComponent({
  setup () {
    const myValue = ref<string>("Who knows!")
    const numericValue:any = ref(null)
    async function loadData(search: string) {
      numericValue.value = eventApi().getEventCount(search)
    }
    watch(myValue, ()=> loadData(myValue.value))

    return {myValue, numericValue}
  }
})
</script>

<style scoped>

</style>