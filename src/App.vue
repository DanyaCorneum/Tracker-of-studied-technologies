<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterLinks from './components/FooterLinks.vue'
import { RouterView } from 'vue-router'
import ParticleContainer from './components/ParticleContainer.vue'
</script>

<template>
  <ParticleContainer/>
  <NavBar />
  <RouterView />
  <FooterLinks />
</template>

<style scoped></style>
