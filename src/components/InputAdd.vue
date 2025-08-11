<script setup lang="ts">
import ActButton from './ActButton.vue'

const props = defineProps<{
  class?: string
  isButton?: boolean
  isBig?: boolean
}>()

</script>

<template>
  <div :class="`input-add ${props.class}`">
    <textarea
      name=""
      id=""
      style="resize: none"
      :style="`${!props.isBig ? 'display: none' : ''}`">
    ></textarea>
    <input type="text" :style="`${props.isBig ? 'display: none' : ''}`" />
    <ActButton class="add" :style="`${props.isButton ? '' : 'display: none'}`">
      <slot>add smth</slot>
    </ActButton>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.input-add {
  display: flex;
  justify-content: flex-start;

  textarea,
  input {
    @include input();
  }

  .add {
    @include button();
    padding: 10px 20px;
    border: 3px solid transparent;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
