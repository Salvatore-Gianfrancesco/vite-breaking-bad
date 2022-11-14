import { reactive } from 'vue'

export const store = reactive({
    urlApi: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
    error: null
})