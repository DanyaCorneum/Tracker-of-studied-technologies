<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, watch } from 'vue'

import ActButton from './ActButton.vue'

const props = defineProps<{
  class?: string
  currentProgress: number
}>()

const progress: Ref<number> = ref(props.currentProgress)

watch(
  () => props.currentProgress,
  (newVal) => {
    if (newVal < 100) {
      progress.value = newVal
    }
  },
)

const changeProgress = (): void => {
  console.log('change progress', progress.value)
  console.log('change progress', props.currentProgress)

  progress.value++
}
</script>

<template>
  <div class="stat-card" :class="`${props.class}`">
    <div class="info-card__inner">
      <header>
        <h2>
          <slot name="header"> placeholder</slot>
        </h2>
      </header>
      <main>
        <p>
          <slot name="main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi magnam in
            quisquam, consequuntur perferendis numquam repellendus praesentium commodi accusamus
            fugiat earum assumenda accusantium ullam voluptatibus, illo explicabo doloremque
            laborum!
          </slot>
        </p>
      </main>
      <div :class="`bar`" :style="`width: ${progress}%`"></div>
      <div class="act-button">
        <ActButton @onclick="changeProgress" :class="'act-button'">
          <slot name="act">More</slot>
        </ActButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;

.stat-card {
  min-width: 500px;
  min-height: 500px;

  .bar {
    max-width: 98%;
    height: 10px;
    background-color: $accent;
    border-radius: $brd-radius;
    padding: 0;
  }
}
</style>
