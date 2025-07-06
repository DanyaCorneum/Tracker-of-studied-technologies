<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <button :class="props.class"><slot /></button>
</template>

<style lang="scss" scoped>
@use '../assets/styles/mixins' as *;

button {
  @include button();
}
</style>
