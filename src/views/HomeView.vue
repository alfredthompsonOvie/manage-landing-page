<template>
  <app-header />
  <main class="main">
    <app-about />
  </main>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppAbout from '../components/AppAbout.vue';
  export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppAbout
    }
  }
</script>

<style scoped>

</style>
