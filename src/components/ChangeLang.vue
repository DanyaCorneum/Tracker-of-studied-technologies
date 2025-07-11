<script setup lang="ts">
// import { ref } from 'vue'
// import type { Ref } from 'vue'
// const open: Ref<boolean> = ref(false)
</script>

<template>
  <form action="">
    <form action="select">
      <select name="change-lang" id="">
        <option value="0" disabled>Select pls</option>
        <option value="1">🇷🇺 ru</option>
        <option value="2">🇬🇧 eng</option>
        <option value="3">🇨🇳 china</option>
      </select>
    </form>
  </form>
  <Teleport to="body">
    <div class="modal">
      <p>Language has been changed</p>
    </div>
  </Teleport>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;

.modal {
  background-color: darken($text-dark, 10%);
  color: $text-light;
  text-align: center;
  font-size: $text-size;
  padding: 50px 60px;
  border-radius: $brd-radius;
  // position: absolute;
  // top: 50%;
  // bottom: 0;
  // right: 0;
  // left: 25%;
  max-width: 300px;
  max-height: 200px;
  animation: appear 2s ease forwards;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  select {
    color: $accent;
    background-color: $bg-second;
    border: none;
    border-radius: $brd-radius;
    font-size: $text-size;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    option {
      border-radius: $brd-radius;
      transition: 200ms ease;
      background-color: $bg-prime;
      text-align: center;
      font-size: $text-size;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
