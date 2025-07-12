<script setup lang="ts">
import ActButton from '@/components/ActButton.vue'
</script>

<template>
  <div class="hero-section">
    <h1>Welcome</h1>
    <p>This is a simple website to track your progress in learning any technology.</p>
    <i>Hope you will enjoy</i>
    <ActButton :class="`hero-btn`">tutorial?</ActButton>
  </div>
  <div class="tutorial"></div>
  <div class="my-projects"></div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.hero-section {
  margin-top: 250px;
  margin-bottom: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  color: $text-light;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 40px;
  }
  .hero-btn {
    @include button(20px 50px);
    font-size: 20px;
    text-transform: capitalize;
  }
}
</style>
