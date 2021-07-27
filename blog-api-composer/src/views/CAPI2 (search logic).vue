<template>
  <div class="home">
      <!-- <p>{{names}}</p> -->
      <input type="text" v-model="search">
      <p>search terms - {{search}}</p>
      <button @click="handleClick">Stop watch</button>
      <div v-for="name in matchingNames" :key="name">{{name}}</div>
      <!-- O key deve ser indexado a um atributo que não se repita, uma utilização errada é um conjunto de string que se repete, uma correta é indexar a um id -->
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
//quando usar o computed na composition API não esquecer de importar.

export default {
    setup(){
        const search = ref('')
        const names = ref(['mario', 'luigi','peaches', 'Daniel', 'Georgia', 'koopa', 'zack'])

        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        const stopWatch = watch(search, () => {
          console.log('watch function ran')
        })
        //watch é um observable usado para monitorar o que está acontecendo no codigo.

        const stopEffect = watchEffect(() => {
            console.log('watchEfect ran', search.value)
        })
        //essa função diferentemente do watch dispara quando o setup inicia, se passarmos o valor de variavel que queremos observar ela vai disparar sempre
        //que esse valor se alterar.

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }

        return {names, search, matchingNames, handleClick}
    }
}
</script>

<style>

</style>