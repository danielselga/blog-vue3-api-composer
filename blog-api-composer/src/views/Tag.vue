<template>
  <div class="tag">
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostsList :posts="postWithTag"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostsList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {
  components: {Spinner, PostsList},
  setup(){
    const route = useRoute()

    const {posts, error, load} = getPosts()

    load()
    
    const postWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag)) 
    })

    return {error, posts, postWithTag }
  

  }
}
</script>

<style>

</style>