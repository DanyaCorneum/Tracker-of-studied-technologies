<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="user-stats">
    <div class="links">
      <RouterLink to="users" class="nav-link">Users</RouterLink>
      <RouterLink to="stats" class="nav-link">Stats</RouterLink>
    </div>
    <div class="view">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.user-stats {
  display: flex;
  flex-direction: column;
  gap: 40px;
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35%;
    .nav-link {
      color: $text-light;
      font-weight: 700;
      background: transparent;
      padding: 20px 80px;
      border-radius: $brd-radius+20px;
      transition: 200ms ease;
      &:hover{
        background: $bg-second;
        box-shadow: 0 0px 50px $bg-second;
      }
      &:active{
        color:$accent;
        background: darken($bg-second, 5%);
      }
    }
  }
}
</style>
