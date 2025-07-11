<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ChangeTheme from './ChangeTheme.vue'
import ChangeLang from './ChangeLang.vue'
</script>

<template>
  <div class="nav-bar">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/stats" class="nav-link">Stats</RouterLink>
    <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    <RouterLink to="/login" class="nav-link">Login</RouterLink>
    <div class="settings">
      <ChangeTheme />
      <ChangeLang />
    </div>
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
    min-width: 200px;
    margin: 0 20px;
    text-align: center;
    padding: 10px 20px;
    font-weight: 700;
    font-size: $title-size;
    text-transform: uppercase;
    border-radius: $brd-radius + 20px;
    color: $text-dark;
    transition: 200ms ease;
    &:hover {
      background-color: darken($bg-second, $amount: 5%);
    }
  }
  .settings {
    display: flex;
    gap: 20px;
    margin: 0 20px;
  }
}
</style>
