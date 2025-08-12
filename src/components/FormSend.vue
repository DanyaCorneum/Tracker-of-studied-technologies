<script setup lang="ts">
import ActButton from './ActButton.vue'

const props = defineProps({ class: String })
const sendLetter = () => {}
</script>

<template>
  <form @submit.prevent="sendLetter" class="form-add" :class="props.class">
    <p>
      <slot name="title">Name</slot>
    </p>
    <input type="text"/>
    <p>
      <slot name="main">Description</slot>
    </p>
    <textarea class="description" style="resize: none"></textarea>
    <p>
      <slot name="footer">Current progress</slot>
    </p>
    <input />
    <ActButton class="submit">Submit</ActButton>
  </form>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.form-add {
  width: 50%;
  border-radius: $brd-radius + 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 20px 40px;
  background: radial-gradient(circle at 25% top, rgba($bg-second, 0.8), rgba($accent, 0.5));
  box-shadow: 0 0 20px $text-dark;

  p {
    font-size: $text-size + 15px;
    color: $text-light;
    font-weight: 600;
  }

  textarea,
  input {
    width: 350px;
    @include input();
    font-weight: 600;
  }

  .description {
    textarea {
      width: 350px;
      height: 200px;
    }
  }

  .submit {
    @include button($width: 40px);
    border-radius: $brd-radius + 30;
  }
}
</style>
