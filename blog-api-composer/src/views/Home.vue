<template>
  <div class="Home">
      <h1>home</h1>
      <div v-if="error"> {{ error }}</div>
      <button @click="showPosts = !showPosts">Toggle Posts</button>
      <button @click="posts.pop()">Remove a Post</button>
      <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts"/>
      </div>
      <div v-else><Spinner/></div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

import {ref} from 'vue'

export default {
    name: 'home',
    components: {
        PostList,
        Spinner
    },
    setup(){

        const {posts, error, load} = getPosts()

        load()
              
        const showPosts = ref(true)

        return {posts, showPosts, error}
    }
}
</script>

<style>

</style>