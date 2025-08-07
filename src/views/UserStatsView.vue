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
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.slide-fade-enter-active {
  transition: all 300ms 500ms ease-out;
}

.slide-fade-leave-active {
  transition: all 400ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

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
      border-radius: $brd-radius + 20px;
      transition: 200ms ease;
      &:hover {
        background: $bg-second;
        box-shadow: 0 0px 50px $bg-second;
      }
      &:active {
        color: $accent;
        background: darken($bg-second, 5%);
      }
    }
  }
}
</style>
