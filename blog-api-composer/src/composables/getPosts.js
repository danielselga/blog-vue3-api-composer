import {ref} from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    /* O bloco try consegue recuperar os erros que possam ocorrer no codigo
    Já o bloco catch serve para tratar esses erros que acontecem. */
    const load = async () => {
        try  {
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })

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

         return {posts, error, load}
}

export default getPosts