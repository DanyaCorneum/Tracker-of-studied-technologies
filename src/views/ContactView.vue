<script setup lang="ts">
import ParticleContainer from '@/components/animation/ParticleContainer.vue'
import FormSend from '@/components/FormSend.vue'
</script>

<template>
  <div class="contact">
    <ParticleContainer :count="200"/>
    <h1 class="title">Contact with me</h1>
    <div class="contact__inner">
      <img src="../assets/img/imageContact.jpg" class="image-to-contact" alt="contact" />
      <div class="social-media">
        <a href="https://github.com/DanyaCorneum">
          <i class="social-icon bi bi-github"></i>
        </a>
        <a href="https://x.com/Not_Corneum?t=NUElrkDrvBSGMddCJBJt6w&s=09">
          <i class="social-icon bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/corneum_papillon?igsh=MWhpcWhvMHJoZmR5dA==">
          <i class="social-icon bi bi-instagram"></i>
        </a>
        <a href="https://t.me/c0rneum_di">
          <i class="social-icon bi bi-telegram"></i>
        </a>
      </div>
    </div>
    <FormSend class="form-write"  >
      <template #title>Full name</template>
      <template #main>Your message</template>
      <template #footer>Email</template>
    </FormSend>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/mixins' as *;
@use '../assets/styles/variables' as *;

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  .title {
    @include title();
  }

  .contact__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      border: 10px solid black;
      border-radius: 50%;
      max-width: 50%;
    }

    .social-media {
      display: flex;
      justify-content: space-around;

      a {
        margin: 20px 5rem;

        .social-icon {
          font-size: calc($text-size + 1.5rem);
          color: $text-light;
        }
      }
    }

  }
    .form-write{

      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 1rem 5rem;
    }
}
</style>
