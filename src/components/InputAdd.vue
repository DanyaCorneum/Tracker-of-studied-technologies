<script setup lang="ts">
import ActButton from './ActButton.vue'
const props = defineProps<{ isButton?: boolean; isBig?: boolean }>()
</script>

<template>
  <div class="input-add">
    <textarea
      name=""
      id=""
      style="resize: none"
      :style="`${!props.isBig ? 'display: none' : ''}`"
    ></textarea>
    <input type="text" :style="`${props.isBig ? 'display: none' : ''}`" />
    <ActButton class="add" :style="`${props.isButton ? '' : 'display: none'}`"
      ><slot>add smth</slot></ActButton
    >
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
    word-break: break-all;
    padding: 10px 20px;
    border: 3px solid transparent;
    border-radius: $brd-radius;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-color: transparent;
    color: $text-dark;
    transition: 200ms ease;
    font-weight: 600;
    &:focus {
      outline: none;
      border: 3px solid $accent;
    }
    &:focus:hover {
      outline: none;
      border: 3px solid $accent;
    }
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
