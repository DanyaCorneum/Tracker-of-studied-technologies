<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterLinks from './components/FooterLinks.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterLinks />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms linear;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
