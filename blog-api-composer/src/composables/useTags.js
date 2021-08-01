import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set()
    
    //O set é como se fosse um array que não aceita repetição.

    posts.forEach(item => {
        // console.log(item)
        item.tags.forEach(tag => tagSet.add(tag))
    })

    tags.value = [...tagSet]
    
    //Aqui estamos espalhando via spread operator o centeudo de um set para dentro de um array.

    return {tags}
}

export default useTags