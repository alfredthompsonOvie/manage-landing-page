<template>
  <app-header />
  <main class="main">
    <app-about />
    <app-testimonials />
  </main>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppAbout from '../components/AppAbout.vue';
import AppTestimonials from '../components/AppTestimonials.vue'

  export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppAbout,
    AppTestimonials
    }
  }
</script>

<style scoped>

</style>
