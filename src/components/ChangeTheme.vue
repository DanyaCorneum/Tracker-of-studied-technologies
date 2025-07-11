<script setup lang="ts">
const dark: string = 'bi bi-moon-stars'
const light: string = 'bi bi-brightness-high'
</script>

<template>
  <div class="change-theme">
    <i class="bi bi-moon-stars"></i>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;

.change-theme {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  i {
    margin: 0;
    color: $text-light;
    font-size: 28px;
    transition: 200ms ease-in-out;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
