<script setup lang="ts">
import ActButton from '@/components/ActButton.vue'
import InfoCard from '@/components/InfoCard.vue'
import ParticleContainer from '../components/ParticleContainer.vue'
</script>

<template>
  <div class="home">
    <ParticleContainer :count="600"/>
    <div class="hero-section">
      <h1>Welcome</h1>
      <p>This is a simple website to track your progress in learning any technology.</p>
      <i>Hope you will enjoy</i>
      <a href="#tutorial">
        <ActButton :class="`hero-btn`">tutorial?</ActButton>
      </a>
    </div>
    <div class="tutorial" id="tutorial">
      <h1>Tutorial</h1>
      <InfoCard
        :has-img="true"
        class="tutorial-card"
        id="t1"
        :img="'https://i.pinimg.com/736x/a2/92/f5/a292f5b227f801feae5ef1a8860a13c7.jpg'"
      ></InfoCard>
      <InfoCard
        :has-img="true"
        class="tutorial-card"
        id="t2"
        :img="'https://i.pinimg.com/736x/a2/92/f5/a292f5b227f801feae5ef1a8860a13c7.jpg'"
      ></InfoCard>
      <InfoCard
        :has-img="true"
        class="tutorial-card"
        id="t3"
        :img="'https://i.pinimg.com/736x/a2/92/f5/a292f5b227f801feae5ef1a8860a13c7.jpg'"
      ></InfoCard>
      <RouterLink to="/stats" class="nav-link"
        ><ActButton :class="`router-btn`">Let's go</ActButton></RouterLink
      >
    </div>
    <div class="my-projects">
      <h1>My other projects</h1>
      <div class="my-projects__inner">
        <InfoCard
          :has-img="true"
          class="project"
          :img="'https://i.pinimg.com/736x/e6/d8/29/e6d829b2bafbc6c4fb0c1e7ab3dd136a.jpg'"
          :button="true"
        >
          <template #act>
            <a href="https://github.com/" target="_blank">More</a>
          </template></InfoCard
        >
        <InfoCard
          :has-img="true"
          class="project"
          :img="'https://i.pinimg.com/736x/e6/d8/29/e6d829b2bafbc6c4fb0c1e7ab3dd136a.jpg'"
          :button="true"
        >
          <template #act>
            <a href="https://github.com/" target="_blank">More</a>
          </template></InfoCard
        >
        <InfoCard
          :has-img="true"
          class="project"
          :img="'https://i.pinimg.com/736x/e6/d8/29/e6d829b2bafbc6c4fb0c1e7ab3dd136a.jpg'"
          :button="true"
        >
          <template #act>
            <a href="https://github.com/" target="_blank">More</a>
          </template></InfoCard
        >
        <InfoCard
          :has-img="true"
          class="project"
          :img="'https://i.pinimg.com/736x/e6/d8/29/e6d829b2bafbc6c4fb0c1e7ab3dd136a.jpg'"
          :button="true"
        >
          <template #act>
            <a href="https://github.com/" target="_blank">More</a>
          </template>
        </InfoCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.hero-section {
  margin-top: 250px;
  margin-bottom: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  color: $text-light;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 40px;
  }
  .hero-btn {
    @include button(50px 20px);
    font-size: 20px;
    text-transform: capitalize;
  }
}

.tutorial {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding: 60px;
  h1 {
    font-size: $title-size + 50px;
    color: $text-light;
  }
  .tutorial-card {
    @include card($img-width: 40%);
    backdrop-filter: blur(5px);
    background: linear-gradient(
      148deg,
      rgba($bg-prime, 0.8) 0%,
      rgba(lighten($bg-second, 35%), 0.8) 100%
    );
    box-shadow: 0 0 70px lighten($bg-prime, 20%);
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80%;
    animation: blight 10s linear infinite;
    .info-card__inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: $title-size + 30px;
        font-weight: 900;
      }
      p {
        font-size: $text-size;
        font-weight: 900;
      }
      .act-button {
        button {
          font-size: $text-size + 10px;
          @include button($width: 20px, $height: 100px);
        }
      }
    }
    @keyframes blight {
      0% {
        box-shadow: 0 0 70px lighten($bg-prime, 20%);
      }
      50% {
        box-shadow: 0 0 40px lighten($bg-prime, 20%);
      }
      100% {
        box-shadow: 0 0 70px lighten($bg-prime, 20%);
      }
    }
  }
  #t2 {
    img {
      order: 2;
    }
    .info-card__inner {
      order: 1;
    }
  }
  .router-btn {
    @include button($width: 60px, $height: 20px);
    font-size: $title-size + 10px;
  }
}

.my-projects {
  h1 {
    color: $text-light;
    font-size: $title-size + 40px;
    text-align: center;
    font-weight: 700;
  }
  .my-projects__inner {
    margin: 10rem 1.5rem;
    display: flex;
    gap: 40px;
    .project {
      @include card($img-width: 70%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: visible;
      transition: 200ms ease;
      img {
        border-radius: 50%;
        transform: translateY(-100px);
      }
      .info-card__inner {
        transform: translateY(-100px);
      }
      .act-button {
        transform: translateY(50px);
        button {
          @include button($width: 5px, $height: 10px);
          margin: 0 auto;
        }
      }
      a {
        width: 100%;
        height: 100%;
        font-weight: 900;
      }
      &:hover {
        transform: translateY(-20px);
      }
    }
  }
}
</style>
