<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from './store.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          // console.log(response);
          this.store.characters = response.data
          this.store.foundedItems = response.data.length
        })
        .catch(err => {
          console.log(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    // console.log(this.store);
    this.callApi(this.store.urlApi);
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <AppMain />

</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;



.container {
  background-color: $light;
}
</style>
