<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/header/TheHeader.vue";
import TheMain from "./components/main/TheMain.vue";
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
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;
}
</style>
