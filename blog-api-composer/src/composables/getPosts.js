import { post } from 'request'
import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    /* O bloco try consegue recuperar os erros que possam ocorrer no codigo
    Já o bloco catch serve para tratar esses erros que acontecem. */
    const load = async () => {
        try  {
            const res = await projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc')
            //O metodo orderBy serve para ordenarmos os documentos via parametro.
            .get() //essa chamada cria uma conexão com nossa coleção.
            
            posts.value = res.docs.map(doc => {
                // console.log(doc.data())
                //o data() extrai o dado dentro do documento.
                return { ...doc.data(), id: doc.id }
                // Esse return estamos pegando todos os valores detro de doc e os espalhando dentro desse novo objeto.
                // e esse id: será usado como :key do nosso loop.
            })
            //map return a new array based on the old one.
            //a função map retorna um novo array baseado no array anterior.
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
           }
         }


         return {posts, error, load}
}

export default getPosts