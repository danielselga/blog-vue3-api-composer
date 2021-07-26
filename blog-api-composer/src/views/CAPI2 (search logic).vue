<template>
  <div class="home">
      <!-- <p>{{names}}</p> -->
      <input type="text" v-model="search">
      <p>search terms - {{search}}</p>
      <div v-for="name in matchingNames" :key="name">{{name}}</div>
      <!-- O key deve ser indexado a um atributo que não se repita, uma utilização errada é um conjunto de string que se repete, uma correta é indexar a um id -->
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
//quando usar o computed na composition API não esquecer de importar.

export default {
    setup(){
        const search = ref('')
        const names = ref(['mario', 'luigi','peaches', 'Daniel', 'Georgia', 'koopa', 'zack'])

        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        watch(search, () => {
          console.log('watch function ran')
        })

        return {names, search, matchingNames, watch}
    }
}
</script>

<style>

</style>