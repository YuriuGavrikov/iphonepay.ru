<script setup>
import TheCard from "./TheCard.vue";

import { ref } from "vue";

import { useMyStore } from "../stores/Store";
const myStore = useMyStore();

const show = false;

const bigVideo =
  "https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge_2x.mp4#t=4.628697";
</script>

<template>
  <main class="main">
    <video :src="bigVideo" autoplay muted loop width="100%" height="600px">
      Sorry, your browser doesn't support embedded videos, but don't worry, you
      can
    </video>

    <div class="cards">
      <TheCard v-for="phone in myStore.iphone" :phone="phone" />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  width: 100%;
}
video {
  width: 100%;
  height: 70vh;

  padding: 20px;

  border-radius: 40px;

  object-fit: cover;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
@media (max-width: 1200px) {
  video {
    height: 90vh;

    padding: 20px;

    border-radius: 40px;

    object-fit: cover;
  }
}
</style>
