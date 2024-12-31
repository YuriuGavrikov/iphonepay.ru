<script setup>
import TheCard from "./../TheCard.vue";

import { useMyStore } from "../../stores/Store";
const myStore = useMyStore();
</script>

<template>
  <h2>iPhones</h2>
  <div class="cards">
    <TheCard v-for="phone in myStore.iphone" :phone="phone" />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
