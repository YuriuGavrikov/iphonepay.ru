<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
