<script>
import { store } from '../store';

export default {
    name: 'SelectCategory',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="search my-3">
        <div class="container d-flex align-items-center">
            <h5>Select a category</h5>
            <select class="form-select mx-2" v-model="store.selectedCategory" @change="$emit('changeData')">
                <option value="breaking">Breaking Bad</option>
                <option value="better">Better Call Saul</option>
                <option value="bad,">Both</option>
            </select>
            <span class="cross fs-5 d-flex justify-content-center rounded-circle" v-if="store.selectedCategory != ''"
                @click="$emit('resetData')">
                x
            </span>
        </div>
    </section>

</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.search {
    h5 {
        color: $light;
    }

    select {
        width: 200px;
    }

    .cross {
        height: 25px;
        aspect-ratio: 1/1;
        background-color: $light;
        color: $bba-primary;
        font-weight: bold;
        line-height: 100%;
        vertical-align: middle;
        cursor: pointer;
    }
}
</style>