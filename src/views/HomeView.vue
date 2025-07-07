<script setup lang="ts">
import Button from '@/components/Button.vue'
import InfoCard from '@/components/InfoCard.vue'
import StatCard from '@/components/StatCard.vue'
</script>

<template>
  <Button>Click me</Button>
  <InfoCard
    :class="'inf'"
    :img="'https://i.pinimg.com/736x/40/5d/c5/405dc5cd8143c3c96a98253afb9e0643.jpg'"
  >
  </InfoCard>
  <StatCard />
</template>

<style lang="scss">
.inf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  text-align: center;
}
</style>
