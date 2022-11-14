<script>
export default {
    name: 'CharacterItem',
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="character p-3 text-center">
            <img :src="character.img" :alt="character.name">
            <h6 class="text-uppercase py-2">{{ character.name }}</h6>
            <div class="series">{{ character.category }}</div>
            <div class="status">{{ character.status }}</div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.character {
    height: 400px;
    background-color: $bba-primary;

    img {
        max-height: 70%;
        width: 100%;
    }

    h6 {
        color: $light;
    }

    .series,
    .status {
        color: $gray;
    }
}
</style>