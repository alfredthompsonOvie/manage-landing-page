<template>
  <app-header />
  <main class="main">
    <app-about />
    <app-testimonials />
  </main>
  <footer class="footer">
      <section class="getStarted">
        <div class="getStarted__content">
          <p>Simplify how your team works today.</p>
          <a href="#" class="cta cta--alt">Get Started</a>
        </div>
      </section>
      <section class="contacts">
        <!-- Home
        Pricing
        Products
        About Us
        Careers
        Community
        Privacy Policy

        Updates in your inbox…
        Go

        Copyright 2020. All Rights Reserved -->
      </section>
    </footer>
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
