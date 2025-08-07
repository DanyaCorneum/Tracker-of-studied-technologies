<script setup lang="ts">
import FormAdd from '@/components/FormAdd.vue'
</script>

<template>
  <div class="stat">
    <div class="stats-page">
      <div class="my-stats">
        <h1>My current stats</h1>
        <p>There is empty space...</p>
      </div>
    </div>
    <div class="stats">
      <div class="stats-tutorial">
        <h1>Add new stat</h1>
        <p>Enter the name, description, and current progress of the skill.</p>
      </div>
      <FormAdd />
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;

.stats {
  display: flex;
  gap: 40px;
  justify-content: space-around;
  margin: 100px auto;
  padding: 0 100px;
  .stats-tutorial {
    color: $text-light;
    h1 {
      font-size: $title-size + 60px;
      font-weight: 700;
    }
    p {
      font-size: $text-size + 20px;
    }
  }
}
.my-stats {
  text-align: center;
  h1 {
    color: $text-light;
    font-size: $title-size + 60px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  p {
    color: $text-light;
    font-size: $text-size + 20px;
    margin-bottom: 50px;
  }
}
</style>
