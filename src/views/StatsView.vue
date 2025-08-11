<script setup lang="ts">
import FormAdd from '@/components/FormAdd.vue'
import { type Reactive, reactive, ref, computed } from 'vue'
import type { Ref } from 'vue'
import type CurrentStats from '@/types/StatsType.ts'
import StatCard from '@/components/StatsCard.vue'
import { useCurrentData } from '@/stores/currentData.ts'
import InfoCard from '@/components/InfoCard.vue'

const currentData = useCurrentData()
const data = computed(() => {
  return currentData.getData
})
</script>

<template>
  <div class="user-stats">
    <div class="stats-page">
      <div class="my-stats">
        <h1>My current stats</h1>
        <p v-if="!data">There is empty space...</p>
        <StatCard :class="'my-stat'" :current-progress="Number(data.progress)">
          <template #header>
            <h2>{{ data.name }}</h2>
          </template>
          <template #main>
            {{ data.description }}
          </template>
          <template #act> +1</template>
          >
        </StatCard>
      </div>
    </div>
    <div class="stats-tutorial">
      <div class="stats-tutorial__inner">
        <h1>Add new stat</h1>
        <p>Enter the name, description, and current progress of the skill.</p>
      </div>
      <FormAdd />
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.user-stats {
  display: flex;
  gap: 40px;
  justify-content: space-around;
  align-items: center;
  margin: 100px auto;
  padding: 0 100px;

  .my-stats {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: $text-light;
      font-size: $title-size + 60px;
      font-weight: 700;
      margin-bottom: 50px;
    }

    .my-stat {
      @include card($progress: 0%);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      h2{
        font-size: 18px * 2;
      }
      p{
        text-align: center;
      }
      .act-button {
        display: flex;
        justify-content: center;
        align-content: center;
        button {
          width: 100%;
          max-width: 250px;
        }
      }
    }
  }
}

.stats-tutorial {
  display: flex;
  justify-content: space-between;
  color: $text-light;

  h1 {
    font-size: $title-size + 60px;
    font-weight: 700;
  }

  p {
    font-size: $text-size + 20px;
  }
}
</style>
