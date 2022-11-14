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
            <!-- loader -->
            <div class="loader text-center" v-if="store.showLoader">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>

            <div v-else>
                <!-- founded -->
                <div class="founded mb-3 p-3">
                    Found {{ store.foundedItems }} characters
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

        .loader {
            height: 100vh;
        }
    }
}
</style>