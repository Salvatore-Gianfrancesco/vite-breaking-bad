<script>
import CharactersList from './CharactersList.vue';
import SelectItem from './SelectItem.vue';

export default {
    name: 'AppMain',
    components: {
        CharactersList,
        SelectItem
    }
}
</script>

<template>
    <main>
        <!-- select -->
        <SelectItem />

        <!-- characters list -->
        <CharactersList />
    </main>
</template>

<style lang="scss">

</style>