<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
const emits = defineEmits<{
  (e: "onclick"): void
}>()
</script>

<template>
  <button @click="$emit('onclick')" :class="`${props.class}`"><slot /></button>
</template>

<style lang="scss" scoped>
@use '../assets/styles/mixins' as *;
</style>
