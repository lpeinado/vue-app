import {ref, computed} from "vue"
export default function myModule(){
  const counter = ref(50)
  const increment = () => counter.value ++
  const attending = ref(['Luigi','Rosita','Tomàs'])
  const placesLeft = computed(()=> counter.value - attending.value.length)
  return {counter, increment, placesLeft, attending}
}