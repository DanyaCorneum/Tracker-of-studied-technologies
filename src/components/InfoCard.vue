<script setup lang="ts">
const props = defineProps<{ class?: string; img?: string }>()
</script>

<template>
  <div :class="`info-card ${props.class}`">
    <img :src="props.img" alt="image is unloaded" />
    <header>
      <slot name="header">
        <h2>placeholder</h2>
      </slot>
    </header>
    <main>
      <slot name="main">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi magnam in quisquam,
          consequuntur perferendis numquam repellendus praesentium commodi accusamus fugiat earum
          assumenda accusantium ullam voluptatibus, illo explicabo doloremque laborum!
        </p>
      </slot>
    </main>
    <folow-link>
      <slot name="folow-link"></slot>
    </folow-link>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.info-card {
  @include card();
}
</style>
