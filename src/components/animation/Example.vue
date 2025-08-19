<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCube } from '@/composables/useCube.ts';


const canvasContainer = ref<HTMLElement | null>(null);

onMounted(() => {
console.log('canvasContainer', canvasContainer.value);
  if (canvasContainer.value) {
    useCube(canvasContainer.value);
  }
});

</script>

<template>
  <canvas
    ref="canvasContainer" class="three-container"></canvas>
</template>

<style scoped>

.three-container {
  width: 100%;
  height: 100vh;
}

</style>
