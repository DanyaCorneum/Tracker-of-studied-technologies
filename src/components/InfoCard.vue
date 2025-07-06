<script setup lang="ts">
const props = defineProps<{ class?: string; img?: string }>()
</script>

<template>
  <div :class="`info-card ${props.class}`">
    <img :src="props.img" alt="image is unloaded" />
    <header><slot name="header"></slot></header>
    <main>
      <slot name="main"></slot>
    </main>
    <folow-link>
      <slot name="folow-link"></slot>
    </folow-link>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/main' as *;
@use '../assets/styles/mixins' as *;

.info-card {
  @include info-card();
  @include image();
}
</style>
