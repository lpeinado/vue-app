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
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from "vue";
import myModule from '../modules/myModule'

export default defineComponent({
  setup () {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {
      console.log("Mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Before Update!");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Before Unmount!");
    });
    onUnmounted(() => {
      console.log("Unmounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });
    
    const {counter, increment, placesLeft, attending} = myModule();
    return {counter, increment, placesLeft, attending}
  }
})

</script>

<style scoped>

</style>