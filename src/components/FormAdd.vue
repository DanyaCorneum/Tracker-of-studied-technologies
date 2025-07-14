<script setup lang="ts">
import InputAdd from './InputAdd.vue'
import ActButton from './ActButton.vue'
</script>

<template>
  <form @submit.prevent="" class="form-add">
    <p>Name</p>
    <InputAdd class="name" :is-big="true">Name</InputAdd>
    <p>Description</p>
    <InputAdd class="description" :is-big="true">Description</InputAdd>
    <p>Current progress</p>
    <InputAdd class="progress" :is-big="true">Current progress</InputAdd>
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
  }
  .name textarea,
  input,
  .description textarea,
  input,
  .progress textarea,
  input {
    font-size: 20px;
    padding: 20px 40px;
    border-radius: $brd-radius + 30;
  }
  .description {
    textarea,
    input {
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
