<script>
import { store } from '../store.js'
import CharacterItem from './CharacterItem.vue';
import LoaderItem from './LoaderItem.vue';

export default {
    name: 'CharactersList',
    components: {
        CharacterItem,
        LoaderItem
    },
    data() {
        return {
            store
        }
    },
    computed: {
        foundedCharacters() {
            return this.store.characters.length;
        }
    }
}
</script>

<template>
    <section class="characters">
        <div class="container p-5">
            <!-- loader -->
            <LoaderItem v-if="store.showLoader" />

            <!-- characters -->
            <div v-else>
                <!-- founded -->
                <div class="founded mb-3 p-3">
                    Found {{ foundedCharacters }} characters
                </div>

                <!-- character item -->
                <div class="row row-cols-1 row-cols-md-5 g-4 mx-2">
                    <CharacterItem v-for="character in store.characters" :character="character" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.characters {
    .container {
        background-color: $light;

        .founded {
            background-color: $dark;
            color: $light;
            font-weight: bold;
        }
    }
}
</style>