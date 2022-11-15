<script>
import axios from 'axios';
import CharactersList from './CharactersList.vue';
import SelectItem from './SelectItem.vue';
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        CharactersList,
        SelectItem
    },
    data() {
        return {
            store
        }
    },
    methods: {
        changeCategory() {
            // console.log(this.store.selectedCategory);
            const category = this.store.selectedCategory;
            const url = `${this.store.urlApi}?category=${category}`;
            console.log(url);

            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.store.characters = response.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },

        resetFilter() {
            this.store.selectedCategory = '';
            this.changeCategory();
        }
    }
}
</script>

<template>
    <main>
        <!-- select -->
        <SelectItem @changeData="changeCategory" @resetData="resetFilter" />

        <!-- characters list -->
        <CharactersList />
    </main>
</template>

<style lang="scss">

</style>