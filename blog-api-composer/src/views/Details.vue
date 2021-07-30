<template>
<div>
    <div v-if="error">{{error}}</div>
    <div v-if="post" class="post">
        <h3>{{post.title}}</h3>
        <p class="pre">{{post.body}}</p>
    </div>
    <div v-else><Spiner/></div>
</div>
</template>

<script>
import getPost from '../composables/getPost'
import Spiner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'

export default {
    components: {
        Spiner
    },
    props: ['id'],
    setup(props) {
    
    const router = useRoute()
    console.log(useRoute())

    const {post, error, load} = getPost(router.params.id) 
    

    load()
    
    return {post, error}
    }
}
</script>

<style>

    .post {
        max-width: 1200px;
        margin: 0 auto;
    }

    .post p {
        color: #444;
        line-height: 1.5rem;
        margin-top: 40px;
    }

    .pre {
        white-space: pre-wrap;
    }

</style>