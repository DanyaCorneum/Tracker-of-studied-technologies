<script setup lang="ts">
import InputAdd from '@/components/InputAdd.vue'
import SelectUser from '@/components/SelectUser.vue'
</script>

<template>
  <div class="users">
    <form @submit.prevent="" class="add-user">
      <h1>Add new user</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia impedit dignissimos nobis
        deleniti quas aperiam? Quam earum nihil corrupti, minus repudiandae amet quod fuga suscipit
        repellendus, nesciunt sunt vel libero.
      </p>
      <InputAdd :class="'input'" :is-button="true">Add</InputAdd>
    </form>
    <div class="select-user">
      <h1>Select user</h1>
      <SelectUser />
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.users {
  display: flex;
  flex-direction: column;
  gap: 60px;

  padding: 60px;
  .add-user {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    h1 {
      @include title();
    }
    p {
      @include title();
      font-size: $text-size + 20px;
    }
    .input {
      text-align: center;
      input {
        width: 500px;
      }
    }
  }
}
.select-user {
  display: flex;
  flex-direction: column;
  gap: 100px;
  h1 {
    @include title();
    text-align: center;
  }
  select {
    color: $text-light;
    border-radius: $brd-radius + 50px;
    font-size: $text-size + 20px;
    padding: 40px 25%;
    box-shadow: 0 0 20px transparent;
    background: linear-gradient(-40deg, $bg-second, $bg-prime 0%, $accent 0%, $bg-second);
    transition: all 700ms ease-out;
    &:hover {
      box-shadow: 0 0 20px $accent;
      transform: translateY(-20px);
    }
  }
}
</style>
