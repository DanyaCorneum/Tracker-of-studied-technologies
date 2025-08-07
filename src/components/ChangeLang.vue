<script setup lang="ts">
import { type Ref, ref } from 'vue'

const language: Ref<string> = ref('en')
const isOpen: Ref<boolean> = ref(false)

function selectLang(): void {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="change-lang" :class="{ focus: isOpen }" @click="selectLang">
    <div class="title">
      <h2>{{ language }}</h2>
    </div>
    <div class="select" :class="{ selected: isOpen }" style="">
      <div class="option ru" @click="language = 'RU'">RU 🇷🇺</div>
      <div class="option en" @click="language = 'EN'">EN 🇬🇧</div>
      <div class="option ch" @click="language = 'CH'">CH 🇨🇳</div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/mixins' as *;
@use '../assets/styles/variables' as *;

.change-lang {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  border-radius: $brd-radius + 20px;
  background: transparent;
  transition: ease 0.3s;
  height: 100%;

  .title {
    h2 {
      font-weight: 700;
      font-size: 1rem;
      color: white;
      text-transform: uppercase;
      max-width: 22px;
    }
  }

  .select {
    display: block;
    position: absolute;
    width: 100%;
    top: calc(100% + 5px);
    left: 0;
    right: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 100ms linear;

    .option {
      font-weight: 700;
      margin: 0.5rem 0;
      padding: 0.5rem 1.5rem;
      text-align: center;
      backdrop-filter: blur(1px);
      background-color: lighten(rgba($bg-second, 0.6), $amount: 20%);
      border-radius: $brd-radius + 20px;
      color: $text-light;
    }
  }

  .selected {
    max-height: 500px;
    opacity: 1;
    //display: none;
  }

  &:hover {
    backdrop-filter: blur(1px);
    box-shadow: 0 0 10px $bg-second;
    background-color: lighten(rgba($bg-second, 0.6), $amount: 20%);
    cursor: pointer;
  }
}

.focus {
  backdrop-filter: blur(1px);
  box-shadow: 0 0 10px $bg-second;
  background-color: lighten(rgba($bg-second, 0.6), $amount: 20%);
  cursor: pointer;
}
</style>
