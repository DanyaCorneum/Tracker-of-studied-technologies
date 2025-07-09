<script setup lang="ts">
import Button from '@/components/ActButton.vue'
import InfoCard from '@/components/InfoCard.vue'
import ChangeLang from '@/components/ChangeLang.vue'
</script>

<template>
  <Button :class="'btn'">Click me</Button>
  <ChangeLang />
  <InfoCard
    :class="'inf'"
    :img="'https://i.pinimg.com/736x/40/5d/c5/405dc5cd8143c3c96a98253afb9e0643.jpg'"
    :bar="true"
  >
    <template #btn>Click me</template>
  </InfoCard>

  <InfoCard
    :class="'inf2'"
    :img="'https://i.pinimg.com/736x/40/5d/c5/405dc5cd8143c3c96a98253afb9e0643.jpg'"
    :bar="false"
  >
    <template #header>Lol</template>
    <template #main
      >LOLOLOkmjijioshnbdgjibiwevgbcyibvgsdfgjkndsjfgnjdskfngjkdsnfgjkndsjkfgbjkdsbfgjkhbdsfhgbdhfgblhdsjfkbgldhsjfbgldsfjhgbdsjfhgbjdfhbgjhf</template
    >
    <template #btn>Click me</template>
  </InfoCard>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

#app {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.btn {
  @include button(
    $width: 20px,
    $height: 5rem,
    $bg-color: #c29191,
    $bg-color-hover: #5b4949,
    $text-color: $text-dark,
    $radius: 20px
  );
}
.inf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
  img {
    margin: 0 auto;
  }
}
.inf2 {
  @include card(
    $bg-color: rgb(62, 84, 124),
    $bg-color2: transparent,
    $title-color: $text-light,
    $main-color: $text-light,
    $radius: $brd-radius + 30px,
    $progress: 50%,
    $img-width: 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  * {
    margin: 0;
  }
}
</style>
