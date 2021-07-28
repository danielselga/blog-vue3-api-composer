<template>
  <div class="Home">
      <h1>home</h1>
      <div v-if="error"> {{ error }}</div>
      <button @click="showPosts = !showPosts">Toggle Posts</button>
      <button @click="posts.pop()">Remove a Post</button>
      <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts"/>
      </div>
      <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import {ref} from 'vue'

export default {
    name: 'home',
    components: {
        PostList
    },
    setup(){
        const posts = ref([])
        const error = ref(null)

        /* O bloco try consegue recuperar os erros que possam ocorrer no codigo
        Já o bloco catch serve para tratar esses erros que acontecem. */
        const load = async () => {
          try  {
              let data = await fetch('http://localhost:3000/posts')
              if(!data.ok) {
                  throw Error('no data avaliable')
              }
              posts.value = await data.json()  
            }
          catch (err) {
              error.value = err.message
              console.log(error.value)
          }
        }

        load()
        
        const showPosts = ref(true)

        return {posts, showPosts, error}
    }
}
</script>

<style>

</style>