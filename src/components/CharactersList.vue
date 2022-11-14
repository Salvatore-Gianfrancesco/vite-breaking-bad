<script>
import { store } from '../store.js'
import CharacterItem from './CharacterItem.vue';

export default {
    name: 'CharactersList',
    components: {
        CharacterItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="characters">
        <div class="container p-5">
            <div class="row row-cols-1 row-cols-md-5 g-4">
                <CharacterItem v-for="character in store.characters" :character="character" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.container {
    background-color: $light;
}
</style>