<script setup lang="ts">
import type CurrentStats from '@/types/StatsType.ts'

import ActButton from './ActButton.vue'
import { useCurrentData } from '@/stores/currentData.ts'
import { ref } from 'vue'

const props = defineProps({ class: String  })
defineEmits<{
  (e: 'onsubmit'): CurrentStats
}>()
const currentData = useCurrentData()
const name = ref(currentData.name)
const description = ref(currentData.description)
const progress = ref(currentData.progress)

const changeData = () => {
  currentData.changeData("name", name.value)
  currentData.changeData("description", description.value)
  currentData.changeData("progress", String(progress.value))
  console.log('changeData', currentData.getData)
}

const isInputValid = (e: KeyboardEvent | null) => {
  const number: string = '0123456789'
  if (e?.key !== undefined) {
    if (e.key !== 'Backspace' && (!number.includes(e?.key))) {
      e.preventDefault()
    }
  }
}
</script>

<template>
  <form @submit.prevent="changeData" class="form-add" :class="props.class">
    <p>
      <slot name="title">Name</slot>
    </p>
    <input type="text" v-model="name"/>
    <p>
      <slot name="main">Description</slot>
    </p>
    <textarea class="description" style="resize: none"   v-model="description"></textarea>
    <p>
      <slot name="footer"> Current progress</slot>
    </p>
    <input @keydown="isInputValid"  v-model="progress"/>
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
