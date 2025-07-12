<script setup lang="ts">
import InputAdd from './InputAdd.vue'
import ActButton from './ActButton.vue'
</script>

<template>
  <form @submit.prevent="" class="form-add">
    <InputAdd class="name" :is-big="true">Name</InputAdd>
    <InputAdd class="description" :is-big="true">Description</InputAdd>
    <InputAdd class="progress" :is-big="true">Current progress</InputAdd>
    <ActButton class="submit">Submit</ActButton>
  </form>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.form-add {
  max-width: 30%;
  border-radius: $brd-radius;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background-color: $bg-second;
  box-shadow: 0 0 20px $text-dark;
  textarea,
  input {
    width: 350px;
  }
  .name textarea,
  input,
  .description textarea,
  input,
  .progress textarea,
  input {
    border-top-right-radius: $brd-radius;
    border-bottom-right-radius: $brd-radius;
  }
  .description {
    textarea,
    input {
      width: 350px;
      height: 200px;
    }
  }
  .submit {
    @include button();
  }
}
</style>
