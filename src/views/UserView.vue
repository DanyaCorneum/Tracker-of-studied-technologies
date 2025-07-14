<script setup lang="ts">
import InputAdd from '@/components/InputAdd.vue';
</script>

<template>
  <div class="users">
    <div class="add-user">
      <form action="">
        <h1>Add new user</h1>
        <InputAdd :is-button="true">Add</InputAdd>
      </form>
    </div>
    <div class="select-user">
      <form>
        <select name="" id="">
          <option value="1">user1</option>
          <option value="2">user2</option>
          <option value="3">user3</option>
          <option value="4">user4</option>
        </select>
      </form>
    </div>
  </div>
</template>

<style lang="scss"></style>
