<script setup>
// import { ref } from "vue";

// import { useMyStore } from "../stores/Store";
// const myStore = useMyStore();

import { useMyStore } from "../stores/Store";
const myStore = useMyStore();
</script>

<template>
  <header class="header">
    <div class="logo">iPhonePay</div>
    <nav class="nav">
      <div class="nav__iphone">IPhone</div>
      <div class="nav__airpods">AirPods</div>
      <div class="nav__ipad">IPad</div>
      <div class="nav__watch">Watch</div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 50px;
}
.logo {
}
.nav {
  display: flex;
  gap: 10px;
  &__iphone {
  }
  &__airpods {
  }
  &__ipad {
  }
  &__watch {
  }
}
</style>
