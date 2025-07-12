<script setup lang="ts">
import ActButton from './ActButton.vue'
const props = defineProps<{ class?: string; img?: string; link?: string; bar?: boolean }>()
</script>

<template>
  <div :class="`${props.class}`">
    <img :src="props.img" alt="image is unloaded" />
    <header>
      <h2>
        <slot name="header"> placeholder </slot>
      </h2>
    </header>
    <main>
      <p>
        <slot name="main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi magnam in quisquam,
          consequuntur perferendis numquam repellendus praesentium commodi accusamus fugiat earum
          assumenda accusantium ullam voluptatibus, illo explicabo doloremque laborum!
        </slot>
      </p>
    </main>
    <div :class="`bar`" :style="`${props.bar ? 'display: block' : 'display: none'}`"></div>
    <btn>
      <ActButton>
        <slot name="btn">More</slot>
      </ActButton>
    </btn>
  </div>
</template>

<style lang="scss">

</style>
