<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav-bar">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/stats" class="nav-link">Stats</RouterLink>
    <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    <RouterLink to="/login" class="nav-link">Login</RouterLink>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/mixins' as *;
@use '../assets/styles/variables' as *;

.nav-bar {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem auto;
  max-width: 98%;
  background-color: $bg-second;
  border-radius: $brd-radius + 20px;
  box-shadow: 0 0 20px $text-dark;
  .nav-link {
    text-align: center;
    margin: 0 3rem;
    padding: 10px 20px;
    min-width: 200px;
    font-weight: 700;
    font-size: $title-size;
    text-transform: uppercase;
    border-radius: $brd-radius + 20px;
    color: $text-dark;
    transition: 200ms ease;
    &:hover {
      background-color: darken($color: $bg-second, $amount: 5);
    }
  }
}
</style>
