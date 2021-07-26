<template>
  <div class="home">
    home
    <!-- aqui estamos referenciando o paragrafo a variavel 'p'. -->
    <p ref="p" >my name is {{name}} and my age is {{age}}</p>
    <button @click="handleClick">clicked me</button>
    <button @click="age++">Add 1 to Age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'home',
  setup() {

    //O SETUP É CHAMADO ANTES DE QUALQUER HOOK\\
    //O .value só é usado dentro do setup(){} para especificar a algum dado, tem uma função parecida com o this.

    console.log('setup')
    //aqui podemos escrevar javascript, pegar dados de algum lugar ou criar computed properties

    // const p = ref(null)

    //let name = 'mario' //valores declarado em variaveis dentro do setup não são reativos por default.
    //let age = 30 //valores não reativos

    const name = ref('mario') //Quando acrecentamos o ref() ele se torna reativo.
    const age = ref(30) //Quando acrescentamos o ref() o valor se torna reativo.

    // const handleClick = () => {
    //   console.log(p, p.value)
    //   p.value.classList.add('teste')
    //   p.value.textContent = 'hello ninjas'
    // }

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    //return {name: name, age: age}
    return { name, age, handleClick} //exatamente a mesma coisa do codigo de cima, porem no ES06.

    //A chave é o que vai ser retornado no codigo, e o dado é o que vai armazenar ele ou seja aqui estamos guardando mario e idade dentro dessas propriedades
    //que podemos chamar no codigo via key.
  },
}
</script>
