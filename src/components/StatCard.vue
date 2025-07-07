<script setup lang="ts">
const props = defineProps<{ class?: string; img?: string }>()
</script>

<template>
  <div :class="`stat-card ${props.class}`">
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
    <div class="progress-bar"></div>
    <folow-link>
      <slot name="upgrade"></slot>
    </folow-link>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/mixins' as *;
@use '../assets/styles/variables' as *;

.stat-card {
  @include card();

  .progress-bar {
    max-width: 98%;
    height: 5px;
    width: 98% / 100 * 50;
    background-color: red;
    border-radius: $brd-radius;
  }
}
</style>
