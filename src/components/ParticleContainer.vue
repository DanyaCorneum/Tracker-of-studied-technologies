<script setup lang="ts">
import { randomIntFromInterval } from '@/utils/randomFromRange.ts'

const props = defineProps<{count: number}>()
</script>

<template>
  <div class="particle-container">
    <div v-for="n in 100" v-bind:key="n" class="particle" :style="`top: ${randomIntFromInterval(0, count)}%`"></div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;

.particle-container {
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  .particle {
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    background: $text-light;
    box-shadow: 0 0 10px $text-light;
  }
  @for $i from 1 through 100 {
    .particle:nth-child(#{$i}) {
      $n: random(
          $limit: 10,
        ) +
        px;
      width: $n;
      height: $n;
      top: random(400) * 1%;
      left: (random() - 0.05) * 100%;
      animation: particle-motion (random($limit: 12) + 4) + s ease-in-out infinite;
    }
  }
  @keyframes particle-motion {
    0% {
      transform: translate(0);
      opacity: 0;
    }
    20% {
      transform: translate(5px -20px);
      opacity: 0.8;
    }
    35% {
      transform: translate(-10px, -30px);
      opacity: 0.7;
    }
    60% {
      transform: translate(15px, -40px);
      opacity: 0.5;
    }
    85% {
      transform: translate(-20px, -60px);
      opacity: 0.2;
    }
    100% {
      transform: translate(40px, -100px);
      opacity: 0;
    }
  }
}
</style>
