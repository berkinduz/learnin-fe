<script setup>
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import AuthHero from "../components/AuthHero.vue";
</script>

<template>
  <div v-if="auth">
    <AuthHero />
    <Card />
    <Footer />
  </div>
  <div v-else>
    <Hero />
    <Card />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      auth: !!localStorage.getItem("jwt"),
    };
  },
  methods: {},
};
</script>