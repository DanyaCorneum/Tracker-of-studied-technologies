<script setup lang="ts">
import Button from '@/components/Button.vue'
import InfoCard from '@/components/InfoCard.vue'
</script>

<template>
  <Button>Click me</Button>
  <InfoCard :class="'inf'" :img="'https://i.pinimg.com/736x/40/5d/c5/405dc5cd8143c3c96a98253afb9e0643.jpg'">
    <template #header>
      <h2>placeholder</h2>
    </template>
    <template #main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi magnam in quisquam,
        consequuntur perferendis numquam repellendus praesentium commodi accusamus fugiat earum
        assumenda accusantium ullam voluptatibus, illo explicabo doloremque laborum!
      </p>
    </template>
  </InfoCard>
</template>

<style lang="scss"></style>
