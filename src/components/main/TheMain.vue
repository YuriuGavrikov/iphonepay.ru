<script setup>
import TheVideo from "./../main/TheVideo.vue";
import TheHamburgerList from "./../header/TheHamburgerList.vue";

import { useMyStore } from "../../stores/Store";
import { RouterView } from "vue-router";
const myStore = useMyStore();
</script>

<template>
  <main class="main">
    <RouterView v-if="!myStore.helpers.showNavigation" />
    <TheHamburgerList v-else />
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  width: 100%;
}
</style>
