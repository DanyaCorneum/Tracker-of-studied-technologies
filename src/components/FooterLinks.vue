<script setup lang="ts"></script>

<template>
  <footer>
    <h2>DanyaCorneum</h2>
    <p>daniilratkov3@gmail.com</p>
    <div class="links">
      <a href=""><i class="bi bi-github"></i></a>
      <a href=""><i class="bi bi-twitter"></i></a>
      <a href=""><i class="bi bi-instagram"></i></a>
    </div>
  </footer>
</template>

<style lang="scss">
@use '../assets/styles/variables' as *;
footer {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.322), $text-dark);
  color: gray;
  padding: 50px 20px;
  h2 {
    font-weight: 700;
    padding: 10px 50px;
    border-right: 2px solid gray;
  }
  .links {
    position: relative;
    a {
      margin: 0 10px;
      font-size: 20px;
      color: gray;
    }
    &:after {
      display: block;
      position: absolute;
      bottom: -20px;
      content: '';
      width: 100%;
      height: 3px;
      background-color: gray;
      border-radius: $brd-radius;
      z-index: 999;
    }
  }
}
</style>
