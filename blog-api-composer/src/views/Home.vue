<template>
  <div class="home">
      <h1>home</h1>
      <PostList :posts="posts"/>
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
        const posts = ref([
            {title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita illum, cumque deleniti quam aut iste laudantium magnam dolores. Nihil velit consequatur animi sit voluptate aperiam quis, perferendis provident molestias voluptatum accusantium nostrum quos, nesciunt voluptatibus explicabo pariatur. Dolorem obcaecati sint non, voluptatem cumque incidunt necessitatibus accusamus doloribus earum dolor architecto odit. Dolor consequuntur nemo saepe fuga neque at culpa esse earum numquam delectus sint expedita fugit, maxime, totam repellat nostrum porro odio quos provident inventore temporibus! Optio, unde est ducimus repellendus ipsum explicabo dolores ullam veritatis expedita ipsa laborum illum aut sed? Fuga aperiam assumenda rerum, aliquid placeat doloribus, reiciendis quia quibusdam magni nesciunt qui! Est nesciunt facilis enim. Harum similique incidunt inventore veritatis, corporis at temporibus voluptas molestiae provident cum doloremque accusamus debitis voluptatum totam recusandae quis quod, ullam libero delectus exercitationem. Expedita tempora similique dicta nulla eius, tenetur eligendi cumque ducimus, iste cupiditate fugit earum, quis facilis repellendus aspernatur perspiciatis sequi. Asperiores cupiditate sequi omnis consequatur eveniet, at earum consectetur aut amet sed eaque reprehenderit nobis facilis illum iusto, facere id quis. Fugiat ipsa maiores deserunt molestiae velit ut recusandae dolorem qui molestias, fugit assumenda corporis, non perferendis sunt quae perspiciatis? Repudiandae exercitationem quis minima sit architecto.', id: 1},
            {title: 'top 5 CSS Tips', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita illum, cumque deleniti quam aut iste laudantium magnam dolores. Nihil velit consequatur animi sit voluptate aperiam quis, perferendis provident molestias voluptatum accusantium nostrum quos, nesciunt voluptatibus explicabo pariatur. Dolorem obcaecati sint non, voluptatem cumque incidunt necessitatibus accusamus doloribus earum dolor architecto odit. Dolor consequuntur nemo saepe fuga neque at culpa esse earum numquam delectus sint expedita fugit, maxime, totam repellat nostrum porro odio quos provident inventore temporibus! Optio, unde est ducimus repellendus ipsum explicabo dolores ullam veritatis expedita ipsa laborum illum aut sed? Fuga aperiam assumenda rerum, aliquid placeat doloribus, reiciendis quia quibusdam magni nesciunt qui! Est nesciunt facilis enim. Harum similique incidunt inventore veritatis, corporis at temporibus voluptas molestiae provident cum doloremque accusamus debitis voluptatum totam recusandae quis quod, ullam libero delectus exercitationem. Expedita tempora similique dicta nulla eius, tenetur eligendi cumque ducimus, iste cupiditate fugit earum, quis facilis repellendus aspernatur perspiciatis sequi. Asperiores cupiditate sequi omnis consequatur eveniet, at earum consectetur aut amet sed eaque reprehenderit nobis facilis illum iusto, facere id quis. Fugiat ipsa maiores deserunt molestiae velit ut recusandae dolorem qui molestias, fugit assumenda corporis, non perferendis sunt quae perspiciatis? Repudiandae exercitationem quis minima sit architecto.', id: 2}
            ])

            return {posts}
    }
}
</script>

<style>

</style>